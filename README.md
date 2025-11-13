# <img src="https://media.tenor.com/tuQ0GK0BvbwAAAAj/racks-bills.gif" width="50"/> SplitBill App — DevOps UTS

Aplikasi **SplitBill** adalah proyek Node.js sederhana yang digunakan untuk menghitung pembagian tagihan antar beberapa orang.  
Proyek ini dikembangkan sebagai bagian dari **Ujian Tengah Semester (UTS) DevOps** di Telkom University.

---

## 🚀 Deskripsi Aplikasi

SplitBill membantu pengguna:
- Menghitung pembagian tagihan per orang dengan pembulatan otomatis.  
- Menghitung total setelah diskon dan service charge.  
- Menyimpan riwayat transaksi ke dalam file `data.json`.  
- Menampilkan kembali riwayat pembagian tagihan.

Aplikasi ini dibuat dengan Node.js dan menggunakan **Jest** untuk *unit testing*.

---

## ⚙️ Fitur Utama
| Fitur | Deskripsi |
|--------|------------|
| 💰 `splitBill()` | Menghitung pembagian tagihan per orang |
| ➕ `calculateTotalWithCharge()` | Menghitung total akhir dengan service fee dan diskon |
| 🗂️ `addTransaction()` | Menyimpan hasil pembagian ke file JSON |
| 📜 `getHistory()` | Menampilkan seluruh riwayat transaksi |

---

## 🧪 Unit Testing
Testing dilakukan menggunakan **Jest**.  
Perintah untuk menjalankan test:
```bash
npm test
```

---

## ✨ Catatan Akhir

Proyek ini dibuat sebagai bagian dari tugas **Ujian Tengah Semester (UTS) mata kuliah DevOps**  
di **Telkom University, Program Studi Rekayasa Perangkat Lunak**.

Semua kode dan konfigurasi ditujukan untuk pembelajaran, eksplorasi konsep CI/CD,  
serta penerapan praktik **Continuous Integration** dan **Continuous Inspection (SonarCloud)**.

© 2025 **Dewi Atika Muthi**
