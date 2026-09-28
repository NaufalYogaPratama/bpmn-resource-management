# Dokumentasi BPMN Level 2: Process 7 (Release Resource Request)
**Sistem**: Resource Management System (RMS)  
**Tingkat Detail**: BPMN Level 2 (Detailed Procedural Flow)  
**Proses Induk**: Process 7 (Release Resource Request / Early Offboarding)  
**Format Visual**: Full Monochrome (Black & White), Strict Port Anchoring, English Notation  

---

## 1. Konsep Dekomposisi Level 2

Sesuai metodologi **Multi-Level BPMN (Binus University)**:
- **Level 1** hanya menampilkan ikhtisar permohonan pelepasan talenta lebih awal (PM submit pelepasan -> Admin review -> Keputusan -> Selesai).
- **Level 2** membedah proses pelepasan awal (*early offboarding*) ini ke dalam tahapan prosedural yang unik:
  - Berbeda dengan pelepasan terjadwal otomatis di tengah malam oleh scheduler saat kontrak tugas habis (Process 8), **Process 7 adalah pelepasan LEBIH AWAL dari tanggal selesai (`effectiveDate < endDate`)** yang diinisiasi oleh PM.
  - Alasan bisnis: Milestone selesai lebih cepat dari jadwal (*early delivery*), efisiensi anggaran klien, atau reposisi alokasi tim.
  - Memvalidasi aturan batas tanggal pelepasan (`effectiveDate <= assignment endDate` dan `effectiveDate >= today`).
  - Admin melakukan **Verifikasi Serah Terima Tugas & Dokumentasi (*Knowledge Handover Review*)** untuk menjamin tidak ada pekerjaan kritis yang tertinggal atau mengganggu kelangsungan proyek.
  - Saat disetujui, status ikatan penugasan resmi berubah menjadi **`RELEASED`**, dan status talenta di *talent pool* seketika kembali menjadi **`AVAILABLE`** (siap dialokasikan ke proyek lain tanpa jeda).

Untuk **Process 7 (Release Resource Request)**, proses didekomposisi menjadi **3 Sub-Modul Prosedural** terpisah:

| Sub-Modul | Nama File Diagram | Ruang Lingkup Prosedural | Aktor / Swimlane |
| :--- | :--- | :--- | :--- |
| **7.1** | `BPMN_Level_2_Process_7_1_Release_Initiation_Validation.drawio` | **Release Initiation & Handover Validation Flow**<br/>PM mendeteksi pekerjaan selesai lebih awal, membuka modal *Release Resource*, mengisi `Effective Release Date` & alasan pelepasan, validasi batas tanggal di frontend, dan *loop* perbaikan input. | `Project Manager (PM)` & `RMS Client System (Frontend)` |
| **7.2** | `BPMN_Level_2_Process_7_2_Admin_Handover_Verification_Review.drawio` | **Admin Verification & Handover Review Flow**<br/>Admin membuka pengajuan di antrean, backend memanggil konteks penugasan dan status milestone, Admin memeriksa kelengkapan serah terima pekerjaan (*knowledge handover*), dan verifikasi kelayakan pengembalian ke pool. | `Admin (PMO)` & `RMS Backend Engine` |
| **7.3** | `BPMN_Level_2_Process_7_3_Assignment_Termination_Pool_Return.drawio` | **Assignment Termination & Pool Return Flow**<br/>Eksekusi keputusan: transisi status penugasan menjadi `RELEASED` & talenta seketika kembali menjadi `AVAILABLE` jika disetujui; validasi alasan penolakan wajib (*rejection reason*), penugasan tetap `ACTIVE`, pencatatan `HistoryLog`, dan notifikasi jika ditolak. | `Admin (PMO)`, `RMS Transactional Engine`, & `Project Manager (PM)` |

---

## 2. Rincian Alur per Sub-Modul

### 📋 Sub-Modul 7.1: Release Initiation & Handover Validation Flow
- **Aktor/Swimlane**: `Project Manager (PM)` dan `RMS Client System (Frontend)`.
- **Alur Kerja**:
  1. *Start Event*: Milestone pekerjaan selesai lebih awal dari jadwal atau ada penyesuaian alokasi tim.
  2. PM membuka daftar anggota tim pada proyek berjalan (**Ongoing Project**).
  3. PM memilih talenta yang bersangkutan, membuka formulir *Release Resource*, menentukan tanggal pelepasan efektif (**Effective Release Date**), dan mengisi alasan pelepasan lebih awal.
  4. PM menekan tombol *Submit Release*.
  5. **Gateway Validasi Form Sistem**:
     - Tanggal pelepasan harus sebelum atau sama dengan tanggal akhir kontrak penugasan (`effectiveDate <= assignment endDate`).
     - Tanggal pelepasan tidak boleh tanggal lampau (`effectiveDate >= today`).
     - Alasan pelepasan awal wajib diisi (*mandatory justification*).
  6. **Jika Tidak Valid**: Sistem menampilkan pesan error validasi, PM menyesuaikan parameter (*loopback*).
  7. **Jika Valid**: Sistem membuat Request bertipe `RELEASE` dengan status **`PENDING`**, lalu diantrekan ke dasbor Admin.

---

### 📋 Sub-Modul 7.2: Admin Verification & Handover Review Flow
- **Aktor/Swimlane**: `Admin (PMO)` dan `RMS Backend Engine`.
- **Alur Kerja**:
  1. *Start Event*: Permohonan pelepasan awal berstatus `PENDING` masuk ke antrean Admin.
  2. Admin membuka modal detail pengajuan untuk melihat tanggal pelepasan efektif dan justifikasi PM.
  3. Backend memanggil data penugasan aktif, peran talenta, dan riwayat milestone proyek.
  4. **Gateway Pemeriksaan Serah Terima Pekerjaan (*Handover & Scope Verification*)**:
     - Apakah serah terima tugas (*knowledge transfer*) telah diverifikasi tuntas?
     - Apakah pelepasan lebih awal ini tidak mengganggu sisa modul atau sprint yang sedang berjalan?
  5. **Jika Ada Pekerjaan Kritis yang Tertinggal**: Sistem menandai kendala serah terima (*flag incomplete handover*), Admin mencatat hal ini untuk alasan penolakan.
  6. **Jika Serah Terima Tuntas & Terverifikasi**: Admin mengonfirmasi kelayakan pelepasan talenta kembali ke pool -> Terverifikasi layak (*early offboarding verified*) untuk disetujui.

---

### 📋 Sub-Modul 7.3: Assignment Termination & Pool Return Flow
- **Aktor/Swimlane**: `Admin (PMO)`, `RMS Transactional Engine`, dan `Project Manager (PM)`.
- **Alur Kerja**:
  1. *Start Event*: Evaluasi serah terima tugas dan kelayakan pengembalian ke pool selesai.
  2. **Gateway Keputusan Admin**:
  
  * **Jalur Persetujuan (Approved Flow)**:
    - Admin menekan tombol *Approve Release*.
    - Sistem mengubah status Request menjadi **`APPROVED`**.
    - Sistem memperbarui status ikatan penugasan resmi (**`Resource Assignment.status = RELEASED`**) dan menyesuaikan tanggal akhir tugas ke tanggal pelepasan efektif.
    - Status talenta di *talent pool* seketika berubah dari `ASSIGNED` kembali menjadi **`AVAILABLE`** (bebas untuk segera dialokasikan ke proyek lain tanpa jeda mengendap).
    - Dicatat ke **`HistoryLog`** (`APPROVE` / `RELEASE`) dan sistem mengirim notifikasi konfirmasi pelepasan ke PM.
    - PM mengonfirmasi pembaruan daftar anggota tim proyek aktif.
  
  * **Jalur Penolakan & Retensi Penugasan (Rejected Flow)**:
    - Admin menekan tombol *Reject Release*.
    - Sistem membuka dialog alasan penolakan.
    - **Validasi Rejection Reason**: Tombol konfirmasi tolak terkunci jika alasan kosong (wajib diisi, misal: *"Dokumentasi API dan serah terima sprint belum tuntas"*).
    - Status Request diubah menjadi **`REJECTED`**.
    - Status penugasan **TETAP `ACTIVE`** dan talenta **TETAP `ASSIGNED`** pada proyek berjalan hingga batas kontrak semula.
    - Dicatat ke **`HistoryLog`** (`REJECT`) dan notifikasi penolakan beserta alasannya dikirim ke PM.
    - PM membaca alasan di dasbor, lalu menentukan:
      - **Retensi Tugas (*Continue Active Duty*)**: Talenta melanjutkan sisa masa penugasannya pada proyek hingga selesai.
      - **Tuntaskan Serah Terima & Ajukan Ulang (*Re-submit*)**: Memperbaiki dokumentasi serah terima lalu mengajukan kembali (kembali ke Sub-Modul 7.1).

---

## 3. Cara Membuka File di Draw.io

Buka [app.diagrams.net](https://app.diagrams.net) -> Pilih **File > Open From > Device** -> Pilih salah satu file:
1. `bpmn/BPMN_Level_2_Process_7_1_Release_Initiation_Validation.drawio`
2. `bpmn/BPMN_Level_2_Process_7_2_Admin_Handover_Verification_Review.drawio`
3. `bpmn/BPMN_Level_2_Process_7_3_Assignment_Termination_Pool_Return.drawio`
