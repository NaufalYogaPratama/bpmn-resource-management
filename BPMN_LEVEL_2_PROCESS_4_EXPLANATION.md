# Dokumentasi BPMN Level 2: Process 4 (Project Proposal Submission)
**Sistem**: Resource Management System (RMS)  
**Tingkat Detail**: BPMN Level 2 (Detailed Procedural Flow)  
**Proses Induk**: Process 4 (Project Proposal Submission)  
**Format Visual**: Full Monochrome (Black & White), Strict Port Anchoring, English Notation  

---

## 1. Konsep Dekomposisi Level 2

Sesuai metodologi **Multi-Level BPMN (Kaidah Binus University)**:
- **Level 1** hanya memperlihatkan *milestone* umum (PM submit proposal -> Admin putuskan -> Selesai).
- **Level 2** membedah proses tersebut secara mendalam hingga ke level **aturan bisnis (*business rules*)**, **validasi input**, **pengecekan konflik jadwal (*overlap check*)**, **transisi status entitas (*state machine*)**, serta **alur penanganan penolakan & revisi (*exception & revision loop*)**.

Untuk **Process 4 (Project Proposal Submission)**, proses didekomposisi menjadi **3 Sub-Modul Prosedural** terpisah:

| Sub-Modul | Nama File Diagram | Fokus Pembahasan |
| :--- | :--- | :--- |
| **4.1** | `BPMN_Level_2_Process_4_1_Proposal_Drafting_Validation.drawio` | Alur pengisian form oleh PM, validasi tanggal & resource duplikat di sisi frontend, dan *loop* perbaikan input. |
| **4.2** | `BPMN_Level_2_Process_4_2_Admin_Feasibility_Conflict_Review.drawio` | Alur evaluasi kelayakan oleh Admin, query ke Talent Pool, deteksi bentrok jadwal (*overlap check*), dan kecocokan level keahlian. |
| **4.3** | `BPMN_Level_2_Process_4_3_Decision_Execution_Provisioning.drawio` | Alur eksekusi keputusan: aktivasi proyek & ikatan penugasan (*Approval*), validasi *rejection reason* wajib (*Rejection*), pencatatan audit log, dan *loop* revisi PM. |

---

## 2. Rincian Alur per Sub-Modul

### 📋 Sub-Modul 4.1: Proposal Drafting & Input Validation Flow
- **Aktor/Swimlane**: `Project Manager (PM)` dan `RMS Client System (Frontend)`.
- **Alur Kerja**:
  1. *Start Event*: Inisiatif proyek baru dengan klien dimulai.
  2. PM memasukkan data proyek: Nama Klien, Nama Proyek, dan Deskripsi Ruang Lingkup.
  3. PM memilih talenta dari *talent pool*, menentukan peran teknis, serta tanggal penugasan (`startDate` & `endDate`).
  4. PM menekan tombol *Submit Proposal*.
  5. **Gateway Validasi Form Sistem**:
     - *startDate* tidak boleh tanggal lampau (`startDate >= today`).
     - *endDate* harus setelah *startDate* (`endDate > startDate`).
     - Tidak boleh ada talenta yang sama dipilih ganda dalam proposal.
  6. **Jika Tidak Valid**: Sistem menampilkan pesan *validation alert*, PM memperbaiki input data (*loopback*), lalu submit ulang.
  7. **Jika Valid**: Sistem membungkus payload, menetapkan status usulan menjadi **`PENDING`**, dan menempatkannya ke dalam antrean persetujuan Admin.

---

### 📋 Sub-Modul 4.2: Admin Feasibility & Resource Conflict Review Flow
- **Aktor/Swimlane**: `Admin (PMO)` dan `RMS Backend Engine`.
- **Alur Kerja**:
  1. *Start Event*: Usulan berstatus `PENDING` masuk ke antrean Admin.
  2. Admin membuka modal detail pengajuan.
  3. Sistem memanggil data terkini dari *talent pool*: memeriksa status operasional talenta dan daftar penugasan aktifnya.
  4. **Gateway Pengecekan Bentrok Jadwal (*Overlap Check*)**:
     - Apakah status talenta saat ini `Available`?
     - Apakah ada jadwal penugasan aktif lain yang bertubrukan (*overlap*) pada rentang tanggal yang diminta?
  5. **Jika Ada Bentrok / Sibuk**: Sistem menandai konflik penugasan (*staffing conflict*), Admin mencatat catatan bentrok tersebut untuk persiapan penolakan atau penggantian talenta.
  6. **Jika Tidak Ada Bentrok (Semua Available)**: Admin mengevaluasi kesesuaian level kompetensi talenta (ABT, Specialist, Manager) dan anggaran proyek -> Terverifikasi layak untuk disetujui.

---

### 📋 Sub-Modul 4.3: Decision Execution & State Provisioning Flow
- **Aktor/Swimlane**: `Admin (PMO)`, `RMS Transactional Engine`, dan `Project Manager (PM)`.
- **Alur Kerja**:
  1. *Start Event*: Pemeriksaan kelayakan oleh Admin telah selesai.
  2. **Gateway Keputusan Admin**:
  
  * **Jalur Persetujuan (Approved Flow)**:
    - Admin menekan tombol *Approve*.
    - Sistem mengubah status Request menjadi **`APPROVED`**.
    - Sistem membuat proyek baru berstatus **`ONGOING`** dan membentuk ikatan **`Resource Assignment`** resmi berstatus **`ACTIVE`**.
    - Status talenta di pool otomatis berubah dari `Available` menjadi **`ASSIGNED`**.
    - Transaksi dicatat ke **`HistoryLog`** (`APPROVE`) dan sistem mengirim notifikasi sukses ke PM.
    - PM melihat proyek aktif di dasbornya dan tim resmi bertugas.
  
  * **Jalur Penolakan (Rejected Flow & Revision Loop)**:
    - Admin menekan tombol *Reject*.
    - Sistem membuka dialog konfirmasi dan meminta **`rejectionReason`**.
    - **Validasi Alasan**: Tombol konfirmasi tolak *disabled* jika alasan kosong (wajib diisi).
    - Status Request diubah menjadi **`REJECTED`**, status talenta di pool **tetap aman sebagai `AVAILABLE`**.
    - Dicatat ke **`HistoryLog`** (`REJECT`) dan notifikasi penolakan beserta alasannya dikirim ke PM.
    - PM membaca alasan di dasbor, lalu menentukan:
      - **Opsi Revisi**: Menyesuaikan komposisi talenta/jadwal baru (kembali ke Sub-Modul 4.1).
      - **Opsi Batal**: Membatalkan inisiatif proyek.

---

## 3. Cara Membuka File di Draw.io

Buka [app.diagrams.net](https://app.diagrams.net) -> Pilih **File > Open From > Device** -> Pilih salah satu file:
1. `bpmn/BPMN_Level_2_Process_4_1_Proposal_Drafting_Validation.drawio`
2. `bpmn/BPMN_Level_2_Process_4_2_Admin_Feasibility_Conflict_Review.drawio`
3. `bpmn/BPMN_Level_2_Process_4_3_Decision_Execution_Provisioning.drawio`

Semua diagram sudah menggunakan format hitam-putih monokrom, bahasa Inggris, dan konektor port presisi tanpa garis kelebihan atau terputus.
