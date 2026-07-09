# DriveEase - Sistem Admin Rental Mobil (UAS Pemrograman Web Full-Stack)

Aplikasi Web Full-Stack berbasis Node.js untuk manajemen persewaan mobil. Aplikasi ini dirancang untuk memenuhi syarat UAS Pemrograman Web dengan fitur CRUD berelasi antara data armada mobil dan transaksi pesanan rental.

## 🚀 Fitur Utama
- **Kelola Mobil (CRUD 1):** Tambah, lihat, ubah, dan hapus data armada mobil (Nama, Tipe, Harga Sewa).
- **Transaksi Booking (CRUD 2):** Membuat pesanan sewa mobil dengan kalkulasi otomatis total biaya berdasarkan durasi hari.
- **Relasi Database (*One-to-Many*):** Menggunakan ORM Sequelize. Status mobil otomatis berubah menjadi 'Disewa' ketika di-booking, dan kembali 'Tersedia' setelah transaksi diselesaikan atau dibatalkan.

## 🛠️ Tech Stack & Library Yang Digunakan
- **Backend:** Node.js, Express.js (Framework Backend)
- **ORM / Database:** Sequelize (Untuk mengelola relasi tabel), MySQL (melalui driver `mysql2`)
- **Middleware:** `cors` (Izin akses lintas asal), `dotenv` (Mengelola variabel lingkungan/.env)
- **Frontend:** HTML5, JavaScript (Fetch API), Bootstrap 5 (via CDN untuk tampilan menarik)

---

## 💻 Panduan Menjalankan Aplikasi di Lokal

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal aplikasi berikut di komputer Anda:
- [Node.js](https://nodejs.org/) (Versi terbaru)
- **XAMPP** atau **Laragon** (Untuk server MySQL)
- Git (Untuk manajemen repositori dan pengumpulan)

### 2. Persiapan Database
1. Jalankan kontrol panel **XAMPP / Laragon** lalu aktifkan modul **Apache** dan **MySQL**.
2. Buka browser dan pergi ke alamat `http://localhost/phpmyadmin/`.
3. Buat database baru bernama **`uas_rental_db`**.

### 3. Cara Instalasi Library & Menjalankan Backend API
1. Buka terminal atau command prompt, lalu masuk ke direktori folder `backend`:
   ```bash
   cd backend

### Menjalankan aplikasinya
Jalankan perintah berikut untuk menginstal semua library/dependensi yang dibutuhkan:
npm install

Jalankan server backend menggunakan mode development:
npm run dev

Server backend akan berjalan di alamat http://localhost:5000. Tabel database akan otomatis terbuat di phpMyAdmin melalui fitur sinkronisasi Sequelize.

Cara Menjalankan Frontend
Masuk ke dalam folder frontend.

Klik dua kali pada file index.html untuk membukanya secara langsung di browser pilihan Anda (Google Chrome/Edge/Firefox).

Pengujian Aplikasi
Setelah frontend terbuka, Anda bisa langsung mencoba fitur Tambah Data Mobil.

Lakukan transaksi sewa pada Form Transaksi Booking untuk melihat simulasi perhitungan harga otomatis dan perubahan status mobil dari 'Tersedia' menjadi 'Disewa'.
