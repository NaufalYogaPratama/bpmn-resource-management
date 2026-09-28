# Dokumentasi BPMN Level 2: Process 5 (Assign Resource Request)
**Sistem**: Resource Management System (RMS)  
**Tingkat Detail**: BPMN Level 2 (Detailed Procedural Flow)  
**Proses Induk**: Process 5 (Assign Resource Request / Subsequent Assignment)  
**Format Visual**: Full Monochrome (Black & White), Strict Port Anchoring, English Notation  

---

## 1. Konsep Dekomposisi Level 2

Sesuai kaidah **Multi-Level BPMN (Binus University)**:
- **Level 1** hanya menampilkan gambaran umum penambahan tim (PM submit permohonan penambahan resource -> Admin review -> Keputusan -> Selesai).
- **Level 2** membedah proses penambahan talenta ini ke dalam tahapan prosedural mendalam: bagaimana PM memilih talenta dari pool untuk proyek yang sedang aktif (**Ongoing Project**), bagaimana sistem mencegah alokasi ganda di frontend, bagaimana Admin memverifikasi jadwal bentrok (*overlap check*) di backend, serta bagaimana sistem mengikat **Resource Assignment** baru berstatus **ACTIVE** saat disetujui.

Untuk **Process 5 (Assign Resource Request)**, proses didekomposisi menjadi **3 Sub-Modul Prosedural** terpisah:

| Sub-Modul | Nama File Diagram | Ruang Lingkup Prosedural | Aktor / Swimlane |
| :--- | :--- | :--- | :--- |
| **5.1** | `BPMN_Level_2_Process_5_1_Request_Initiation_Validation.drawio` | **Request Initiation & Staffing Validation Flow**<br/>PM memilih Ongoing Project, memilih talenta dari pool, menentukan peran dan tanggal penugasan, validasi form di sisi frontend, dan *loop* perbaikan input. | `Project Manager (PM)` & `RMS Client System (Frontend)` |
| **5.2** | `BPMN_Level_2_Process_5_2_Admin_Verification_Capacity_Check.drawio` | **Admin Verification & Capacity Assessment Flow**<br/>Admin membuka permohonan penambahan tim, sistem memverifikasi status operasional talenta di database (`Available`), memindai tabrakan jadwal (*schedule collision check*), dan validasi kesesuaian level kompetensi (ABT, Specialist, Manager). | `Admin (PMO)` & `RMS Backend Engine` |
| **5.3** | `BPMN_Level_2_Process_5_3_Assignment_Binding_State_Transition.drawio` | **Assignment Binding & State Transition Flow**<br/>Eksekusi keputusan: pembuatan ikatan `Resource Assignment` baru berstatus `ACTIVE` & transisi status talenta menjadi `ASSIGNED` jika disetujui; validasi alasan penolakan wajib (*rejection reason*), pencatatan `HistoryLog`, notifikasi, dan *loop* pemilihan talenta alternatif jika ditolak. | `Admin (PMO)`, `RMS Transactional Engine`, & `Project Manager (PM)` |

---

## 2. Rincian Alur per Sub-Modul

### 📋 Sub-Modul 5.1: Request Initiation & Staffing Validation Flow
- **Aktor/Swimlane**: `Project Manager (PM)` dan `RMS Client System (Frontend)`.
- **Alur Kerja**:
  1. *Start Event*: Proyek berjalan (**Ongoing Project**) membutuhkan penambahan kapasitas tim.
  2. PM memilih Ongoing Project yang aktif dan membuka formulir *Assign Resource*.
  3. PM memilih talenta dari *Resource Pool* yang berstatus `Available`, menentukan peran di proyek, serta tanggal tugas (`startDate` & `endDate`).
  4. PM menekan tombol *Submit Request*.
  5. **Gateway Validasi Form Sistem**:
     - *startDate* tidak boleh tanggal lampau (`startDate >= today`).
     - *endDate* harus setelah *startDate* (`endDate > startDate`).
     - Talenta yang dipilih belum terdaftar sebagai anggota aktif pada proyek tersebut.
  6. **Jika Tidak Valid**: Sistem menampilkan pesan error validasi, PM menyesuaikan parameter/memilih talenta lain (*loopback*).
  7. **Jika Valid**: Sistem membuat Request bertipe `SUBSEQUENT_ASSIGNMENT` dengan status **`PENDING`**, dan menempatkannya ke antrean dasbor Admin.

---

### 📋 Sub-Modul 5.2: Admin Verification & Capacity Assessment Flow
- **Aktor/Swimlane**: `Admin (PMO)` dan `RMS Backend Engine`.
- **Alur Kerja**:
  1. *Start Event*: Permohonan penambahan talenta berstatus `PENDING` masuk ke antrean Admin.
  2. Admin membuka modal detail pengajuan.
  3. Backend memanggil data status operasional talenta dan daftar penugasan aktif dari database.
  4. **Gateway Pengecekan Tabrakan Jadwal (*Schedule Collision Check*)**:
     - Apakah status talenta saat ini benar-benar `Available`?
     - Apakah ada rentang tanggal penugasan di proyek lain yang bertabrakan (*overlap*) dengan periode yang diminta?
  5. **Jika Ada Bentrok Jadwal**: Sistem menandai konflik penugasan (*flag conflict*), Admin mencatat detail bentrok untuk alasan penolakan.
  6. **Jika Bebas Bentrok (*Available*)**: Admin menilai kecocokan peran dan level keahlian talenta (ABT, Specialist, Manager) -> Terkonfirmasi layak (*allocation feasible*) untuk disetujui.

---

### 📋 Sub-Modul 5.3: Assignment Binding & State Transition Flow
- **Aktor/Swimlane**: `Admin (PMO)`, `RMS Transactional Engine`, dan `Project Manager (PM)`.
- **Alur Kerja**:
  1. *Start Event*: Pengecekan kapasitas dan verifikasi ketersediaan telah selesai.
  2. **Gateway Keputusan Admin**:
  
  * **Jalur Persetujuan (Approved Flow)**:
    - Admin menekan tombol *Approve Assignment*.
    - Sistem mengubah status Request menjadi **`APPROVED`**.
    - Sistem membuat entitas ikatan penugasan baru (**`Resource Assignment`**) dengan status **`ACTIVE`** pada Ongoing Project tersebut.
    - Status talenta di pool otomatis berubah dari `Available` menjadi **`ASSIGNED`**.
    - Transaksi dicatat ke **`HistoryLog`** (`APPROVE` / `ASSIGNMENT`) dan sistem mengirim notifikasi alokasi ke PM.
    - PM melihat nama talenta baru muncul di daftar anggota tim proyek aktif (*Ongoing Project member roster*).
  
  * **Jalur Penolakan & Opsi Alternatif (Rejected Flow)**:
    - Admin menekan tombol *Reject Request*.
    - Sistem memunculkan dialog alasan penolakan.
    - **Validasi Rejection Reason**: Tombol konfirmasi tolak terkunci jika alasan kosong (wajib diisi).
    - Status Request diubah menjadi **`REJECTED`**, status talenta di pool **tetap aman sebagai `AVAILABLE`**.
    - Dicatat ke **`HistoryLog`** (`REJECT`) dan notifikasi penolakan beserta alasannya dikirim ke PM.
    - PM membaca alasan di dasbor, lalu menentukan:
      - **Opsi Alternatif**: Memilih talenta lain yang jadwalnya cocok (kembali ke Sub-Modul 5.1).
      - **Opsi Batal**: Membatalkan permintaan penambahan tim.

---

## 3. Cara Membuka File di Draw.io

Buka [app.diagrams.net](https://app.diagrams.net) -> Pilih **File > Open From > Device** -> Pilih salah satu file:
1. `bpmn/BPMN_Level_2_Process_5_1_Request_Initiation_Validation.drawio`
2. `bpmn/BPMN_Level_2_Process_5_2_Admin_Verification_Capacity_Check.drawio`
3. `bpmn/BPMN_Level_2_Process_5_3_Assignment_Binding_State_Transition.drawio`
