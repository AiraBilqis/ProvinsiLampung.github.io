# UTS Sistem Informasi Geografis
- Nama : KHAIRANI BILQIS
- NIM : 121140091
- Sistem Informasi Geografis-R

# *Web* GIS Provinsi Lampung
Ini adalah proyek aplikasi *web* GIS yang dibuat untuk menampilkan data geospasial Provinsi Lampung dalam bentuk peta interaktif.

## Deskripsi
Aplikasi ini memanfaatkan OpenLayers, sebuah pustaka JavaScript untuk memvisualisasikan data geospasial dalam format *web*. Data geospasial yang digunakan dalam aplikasi ini mencakup batas desa, kecamatan, kota, sungai, danau, jalan, pemukiman, dan pemerintahan.

## Variabel Spasial
Variabel spasial yang digunakan dalam aplikasi ini mencakup:
- Koordinat geografis (*longitude* dan *latitude*) dari lokasi peta.
- Klasifikasi geografis (seperti batas administratif, sungai, jalan, dan pemukiman) yang digunakan untuk memetakan objek di peta.

## Data Geospasial
Data geospasial yang dimuat dalam aplikasi ini termasuk dalam format .shp dan digunakan untuk membangun lapisan-lapisan peta yang ditampilkan kepada pengguna.

## Fitur dalam Sistem
- Legenda

  Menampilkan *layer-layer* yang ingin dilihat pengguna berupa batas administratif Provinsi Lampung, Kecamatan, dan Kota; Garis Sungai, Area Danau, Garis Jalan, Area Pemukiman, dan Titik Pemerintahan.
- Pencarian Lokasi

  Fitur pencarian lokasi yang memungkinkan pengguna untuk mencari lokasi tertentu di Provinsi Lampung berdasarkan *layer* atau alamat yang dimasukkan.
- *Pop up* Informasi

  Ketika pengguna mengklik suatu fitur, akan muncul *pop up* yang berisi informasi terkait fitur tersebut.
- Tombol Reset Zoom

  Tombol yang memungkinkan pengguna untuk mengembalikan zoom dan posisi peta ke kondisi semula setelah melakukan *zoom* atau pergeseran.
- Fitur Pengukuran

  Memungkinkan pengguna untuk mengukur panjang jarak suatu titik dalam (km) atau luas suatu area dalam (m2)

## Penggunaan
1. Clone repositori ini ke komputer lokal Anda.
2. Buka file `index.html` dalam peramban web untuk melihat aplikasi.
