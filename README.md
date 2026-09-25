# Resource Management System (RMS) — BPMN 2.0 Process Models

Repositori visualisasi interaktif **BPMN 2.0 (Level 0 & Level 1)** untuk mendemokan alur proses bisnis dan fitur sistem kepada manajemen.

Dibangun dengan arsitektur **Zero-Build Vanilla ES Modules** agar dapat dikembangkan secara paralel oleh 3 orang secara bersamaan tanpa dependensi kompleks atau risiko *git merge conflict*.

---

## 👥 Pembagian Kerja Tim (Parallel Work Division)

Untuk menjaga isolasi pekerjaan dan mencegah *merge conflict*, setiap anggota tim memiliki area tanggung jawab file yang terpisah:

| Anggota Tim | Area Tanggung Jawab | File yang Dikerjakan |
| :--- | :--- | :--- |
| **Orang 1 (Lead / Shell)** | Shell UI, Tab Navigation, Process Landscape, & Auth/Overview | • `index.html`<br/>• `css/style.css`<br/>• `js/app.js`<br/>• `js/diagrams/level0.js`<br/>• `js/diagrams/login.js`<br/>• `js/diagrams/dashboard.js` |
| **Orang 2 (Staffing Core)** | Pengelolaan Talenta & Inisiasi Proyek | • `js/diagrams/resource.js`<br/>• `js/diagrams/project.js` |
| **Orang 3 (Governance & Support)** | Workflow Request, Notifikasi, & Akun PM | • `js/diagrams/activities.js`<br/>• `js/diagrams/notification.js`<br/>• `js/diagrams/devman.js` |

---

## 📁 Struktur Direktori

```
bpmn/
├── index.html                  # Halaman utama aplikasi (tabs & viewport)
├── css/
│   └── style.css               # Styling layout, tabs, dan pill badges
├── js/
│   ├── app.js                  # Handler tab switching & dynamic SVG loader
│   └── diagrams/               # File diagram terisolasi per fitur
│       ├── level0.js           # BPMN Level 0 (Process Landscape / Menu Index)
│       ├── login.js            # Level 1: Authentication Process
│       ├── dashboard.js        # Level 1: Dashboard Monitoring Process
│       ├── resource.js         # Level 1: Resource Allocation Process
│       ├── project.js          # Level 1: Project Proposal & Creation
│       ├── activities.js       # Level 1: Activities & Audit Trail Workflow
│       ├── notification.js     # Level 1: Notification Workflow
│       └── devman.js           # Level 1: Project Manager Management
└── README.md
```

---

## 🚀 Cara Menjalankan Secara Lokal

Karena menggunakan **ES Modules (`import / export`)**, browser membutuhkan protokol HTTP (bukan `file://` langsung):

### Opsi 1: Menggunakan VS Code Live Server (Paling Direkomendasikan)
1. Buka folder `bpmn/` di VS Code.
2. Klik kanan pada `index.html` -> pilih **Open with Live Server**.

### Opsi 2: Menggunakan Python Web Server
Jalankan perintah berikut di dalam direktori `bpmn/`:
```bash
python3 -m http.server 3000
```
Buka browser di `http://localhost:3000`.

### Opsi 3: Menggunakan npx serve / Node.js
```bash
npx serve .
```

---

## 📐 Standar Diagram & Kosakata Resmi

Seluruh teks dan diagram di dalam repositori ini telah diselaraskan dengan tata kelola resmi:
- **Project Manager (PM)**: Pimpinan proyek yang mengajukan kebutuhan tim (menggantikan istilah *DevMan*).
- **Available**: Status talenta yang siap dialokasikan ke proyek (menggantikan istilah *Bench*).
- **Resource**: Talenta teknis internal organisasi.
- **Resource Assignment**: Ikatan penugasan resmi selama rentang tanggal tertentu (*Assignment Period*).
- **RMS**: Resource Management System.
