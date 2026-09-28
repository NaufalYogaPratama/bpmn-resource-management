# Dokumentasi BPMN Level 2: Process 6 (Extend Resource Request)
**Sistem**: Resource Management System (RMS)  
**Tingkat Detail**: BPMN Level 2 (Detailed Procedural Flow)  
**Proses Induk**: Process 6 (Extend Resource Request / Extension)  
**Format Visual**: Full Monochrome (Black & White), Strict Port Anchoring, English Notation  

---

## 1. Konsep Dekomposisi Level 2

Sesuai metodologi **Multi-Level BPMN (Binus University)**:
- **Level 1** hanya menampilkan ikhtisar permohonan perpanjangan waktu tugas (PM submit perpanjangan -> Admin review -> Keputusan -> Selesai).
- **Level 2** membedah proses perpanjangan ini ke dalam tahapan prosedural yang unik:
  - Berbeda dari Process 4 (buat proyek baru) dan Process 5 (tambah talenta baru), **Process 6 bekerja pada penugasan yang SUDAH AKTIF (`ACTIVE`)** pada seorang talenta yang **SUDAH BERADA DI DALAM TIM PROYEK**.
  - Pemicunya (*trigger*) adalah radar peringatan **Assignments Ending Soon** atau evaluasi berkala PM menjelang kontrak tugas berakhir.
  - Memvalidasi aturan batas waktu penugasan (`newEndDate > current endDate`).
  - Admin melakukan **Pengecekan Komitmen Proyek Masa Depan (*Pipeline Booking Collision Check*)** untuk memastikan talenta belum dijadwalkan masuk ke proyek lain setelah tanggal lama.
  - Saat disetujui, sistem memperbarui tanggal akhir penugasan (*Assignment Period*) tanpa mengubah status proyek maupun status talenta (tetap `ACTIVE` & `ASSIGNED`).

Untuk **Process 6 (Extend Resource Request)**, proses didekomposisi menjadi **3 Sub-Modul Prosedural** terpisah:

| Sub-Modul | Nama File Diagram | Ruang Lingkup Prosedural | Aktor / Swimlane |
| :--- | :--- | :--- | :--- |
| **6.1** | `BPMN_Level_2_Process_6_1_Extension_Initiation_Validation.drawio` | **Extension Initiation & Timeline Validation Flow**<br/>PM mendeteksi masa tugas mendekati habis, membuka modal *Extend Assignment*, mengisi `New End Date` & justifikasi perpanjangan, validasi aturan tanggal di frontend, dan *loop* koreksi. | `Project Manager (PM)` & `RMS Client System (Frontend)` |
| **6.2** | `BPMN_Level_2_Process_6_2_Admin_Feasibility_Pipeline_Check.drawio` | **Admin Feasibility & Pipeline Booking Check Flow**<br/>Admin membuka pengajuan di antrean, backend memindai jadwal talenta di masa depan (*future pipeline allocation*), mendeteksi bentrok booking proyek lain, dan evaluasi anggaran perpanjangan. | `Admin (PMO)` & `RMS Backend Engine` |
| **6.3** | `BPMN_Level_2_Process_6_3_Timeline_Prolongation_State_Execution.drawio` | **Timeline Prolongation & State Execution Flow**<br/>Eksekusi keputusan: pembaruan tanggal `endDate` penugasan (status tetap `ACTIVE` & `ASSIGNED`) jika disetujui; validasi alasan penolakan wajib (*rejection reason*), penegakan jadwal lama (*original timeline enforced*), pencatatan `HistoryLog`, dan notifikasi jika ditolak. | `Admin (PMO)`, `RMS Transactional Engine`, & `Project Manager (PM)` |

---

## 2. Rincian Alur per Sub-Modul

### 📋 Sub-Modul 6.1: Extension Initiation & Timeline Validation Flow
- **Aktor/Swimlane**: `Project Manager (PM)` dan `RMS Client System (Frontend)`.
- **Alur Kerja**:
  1. *Start Event*: Peringatan dini masa tugas talenta mendekati batas akhir (*Assignments Ending Soon*).
  2. PM membuka daftar anggota tim pada proyek berjalan (**Ongoing Project**).
  3. PM memilih talenta yang bersangkutan, membuka formulir *Extend Assignment*, menentukan tanggal akhir baru (**New End Date**), dan mengisi justifikasi perpanjangan.
  4. PM menekan tombol *Submit Extension*.
  5. **Gateway Validasi Form Sistem**:
     - Tanggal baru harus lebih besar dari tanggal akhir saat ini (`newEndDate > current endDate`).
     - Alasan justifikasi perpanjangan wajib diisi (*mandatory justification*).
  6. **Jika Tidak Valid**: Sistem menampilkan pesan error validasi, PM menyesuaikan tanggal (*loopback*).
  7. **Jika Valid**: Sistem membuat Request bertipe `EXTENSION` dengan status **`PENDING`**, lalu diantrekan ke dasbor Admin.

---

### 📋 Sub-Modul 6.2: Admin Feasibility & Pipeline Booking Check Flow
- **Aktor/Swimlane**: `Admin (PMO)` dan `RMS Backend Engine`.
- **Alur Kerja**:
  1. *Start Event*: Permohonan perpanjangan berstatus `PENDING` masuk ke antrean Admin.
  2. Admin membuka modal detail pengajuan untuk melihat delta penambahan hari dan justifikasi PM.
  3. Backend memindai alokasi talenta di masa depan (*future pipeline allocation check*): apakah ada proyek lain yang sudah menjadwalkan talenta ini segera setelah tanggal lama?
  4. **Gateway Pengecekan Tabrakan Pipeline (*Pipeline Booking Conflict Check*)**:
     - Apakah talenta bebas dari jadwal proyek baru di rentang tanggal perpanjangan?
  5. **Jika Ada Tabrakan Booking Pipeline**: Sistem menandai konflik alokasi proyek masa depan (*flag pipeline collision*), Admin mencatat nama proyek yang bentrok untuk alasan penolakan.
  6. **Jika Bebas Bentrok**: Admin mengevaluasi dampak anggaran proyek dan kelangsungan penugasan -> Dikonfirmasi layak (*extension feasible*) untuk disetujui.

---

### 📋 Sub-Modul 6.3: Timeline Prolongation & State Execution Flow
- **Aktor/Swimlane**: `Admin (PMO)`, `RMS Transactional Engine`, dan `Project Manager (PM)`.
- **Alur Kerja**:
  1. *Start Event*: Pengecekan kelayakan dan pemindaian pipeline selesai.
  2. **Gateway Keputusan Admin**:
  
  * **Jalur Persetujuan (Approved Flow)**:
    - Admin menekan tombol *Approve Extension*.
    - Sistem mengubah status Request menjadi **`APPROVED`**.
    - Sistem memperbarui tanggal akhir penugasan resmi (**`Resource Assignment.endDate = newEndDate`**).
    - Status penugasan tetap **`ACTIVE`** dan status talenta di pool tetap **`ASSIGNED`** (tidak ada perubahan status entitas, hanya pembaruan tanggal masa tugas).
    - Dicatat ke **`HistoryLog`** (`APPROVE` / `EXTENSION`) dan sistem mengirim notifikasi perpanjangan ke PM.
    - PM mengonfirmasi perpanjangan jadwal pada dasbor anggota tim proyek.
  
  * **Jalur Penolakan & Penegakan Jadwal Lama (Rejected Flow)**:
    - Admin menekan tombol *Reject Extension*.
    - Sistem membuka dialog alasan penolakan.
    - **Validasi Rejection Reason**: Tombol konfirmasi tolak terkunci jika alasan kosong (wajib diisi, misal: *"Talenta sudah dijadwalkan ke Proyek X mulai Senin depan"*).
    - Status Request diubah menjadi **`REJECTED`**.
    - Tanggal penugasan resmi **TIDAK BERUBAH** (jadwal lama tetap berlaku).
    - Dicatat ke **`HistoryLog`** (`REJECT`) dan notifikasi penolakan beserta alasannya dikirim ke PM.
    - PM membaca alasan di dasbor, lalu menentukan:
      - **Penegakan Jadwal Lama (*Enforce Original*)**: Mempersiapkan serah terima tugas (*handover*) dan *offboarding* talenta sesuai jadwal semula.
      - **Negosiasi Ulang (*Re-negotiate*)**: Mengajukan durasi perpanjangan yang lebih pendek yang tidak menabrak jadwal proyek lain (kembali ke Sub-Modul 6.1).

---

## 3. Cara Membuka File di Draw.io

Buka [app.diagrams.net](https://app.diagrams.net) -> Pilih **File > Open From > Device** -> Pilih salah satu file:
1. `bpmn/BPMN_Level_2_Process_6_1_Extension_Initiation_Validation.drawio`
2. `bpmn/BPMN_Level_2_Process_6_2_Admin_Feasibility_Pipeline_Check.drawio`
3. `bpmn/BPMN_Level_2_Process_6_3_Timeline_Prolongation_State_Execution.drawio`
