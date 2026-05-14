# Design System - Portfolio V2 (Muhammad Daffa Khairi Addin)

## 1. Visual Theme & Atmosphere
Website ini mengusung tema **Modern Interactive Minimalism** dengan pendekatan *dual-theme* (Light & Dark Mode) yang mengikuti preferensi sistem pengguna. Atmosfer desain berfokus pada kedalaman visual menggunakan efek *glassmorphism*, elevasi 3D, dan interaktivitas tingkat tinggi untuk menciptakan pengalaman pengguna yang imersif dan futuristik.

Tipografi menggunakan stack font sans-serif modern yang bersih untuk memastikan keterbacaan maksimal. Penekanan visual diberikan melalui efek *shimmer text* dan elemen *glow* untuk mengarahkan perhatian pengguna pada poin-poin penting seperti nama dan peran profesional.

## 2. Color Palette

### Light Mode (Default)
- **Background:** `#EEEEEE` (Near white/Grey)
- **Card Background:** `rgba(255, 255, 255, 0.6)`
- **Main Text:** `#06141B` (Deep Dark)
- **Secondary Text:** `#4A5C6A` (Muted Blue/Grey)
- **Border/Glass:** `rgba(255, 255, 255, 0.5)`

### Dark Mode (System Preference)
- **Background:** `#06141B` (Deep Dark Blue/Black)
- **Card Background:** `rgba(17, 33, 45, 0.7)` (Dark Blue Tint)
- **Main Text:** `#CCD0CF` (Soft Silver)
- **Secondary Text:** `#9BA8AB` (Muted Teal)
- **Accent/Surface:** `#9BA8AB` / `#CCD0CF`

## 3. Typography & Text Effects
- **Heading:** Font Bold/Extrabold dengan `text-5xl` hingga `text-7xl`.
- **Body:** `text-lg` dengan `leading-relaxed` untuk kenyamanan membaca.
- **Text Shimmer:** Gradasi linear yang bergerak (animasi `shimmer`) untuk memberikan kesan premium pada teks nama.
- **Typewriter Effect:** Digunakan pada bagian deskripsi Hero untuk dinamisme konten.

## 4. Geometry & Elevation
- **Radius:** Menggunakan standar `rounded-xl` (12px) untuk tombol dan `rounded-2xl` (16px) untuk card/navbar.
- **3D Tilt:** Efek `perspective-1000` dengan rotasi dinamis pada sumbu X dan Y saat hover pada elemen profil.
- **Glassmorphism:** Class `.glass-premium` menggunakan `backdrop-blur(20px)` dan border semi-transparan untuk efek kaca.

## 5. Components & Interactions

### Magnetic Button
Tombol yang "menarik" kursor pengguna menggunakan physics-based animation (Framer Motion `useSpring`).
- **Styles:** Solid deep-dark atau border-2 transparan dengan efek hover inversi warna.

### Navigation Bar
Floating navbar dengan `backdrop-blur` dan indikator *scroll progress* di bagian bawah bar.
- **Progress Bar:** Gradasi dari `primary` ke `accent`.

### Custom Cursor
Lingkaran kustom berukuran `12px` dengan `mix-blend-mode: multiply` yang menggantikan kursor standar sistem untuk meningkatkan kohesi visual.

## 6. Animations (Tailwind & Framer Motion)
- **Blob:** Animasi background organik yang bergerak dan berubah skala secara konstan.
- **Float:** Efek melayang pada elemen status card.
- **Slide Up:** Transisi masuk elemen saat halaman dimuat.
- **Animate Presence:** Digunakan untuk pergantian teks peran (Software Engineer, ML, AI) secara halus.

## 7. Configuration Reference
- **Primary Color:** `#253745`
- **Secondary Color:** `#4A5C6A`
- **Accent Color:** `#9BA8AB`
- **Dark Mode:** `media` (Tailwind Config)
