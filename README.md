# Aplikasi Presensi Supabase

Aplikasi presensi berbasis Supabase menggunakan HTML dan JavaScript murni.

## Fitur
- Autentikasi pengguna (login/email)
- Isi presensi berdasarkan kelas dan lokasi
- Lihat riwayat presensi

## Struktur Folder
presensi-app/
├── public/                 # Berisi file HTML statis (index.html)
├── src/                   # Berisi kode sumber JavaScript
│   ├── components/       
│   ├── pages/             # Halaman login, register, dashboard
│   └── services/          # Konfigurasi Supabase & API
├── backend/               
│   ├── controllers/
│   ├── routes/
│   └── models/
├── .env.example           # Contoh file environment 
├── package.json           # Konfigurasi proyek Node.js
├── README.md              # Dokumentasi proyek
