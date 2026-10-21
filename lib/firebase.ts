// Import fungsi dari SDK Firebase yang kita butuhkan
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Konfigurasi Firebase dari proyek Anda
const firebaseConfig = {
  apiKey: "AIzaSyCqJvRT7z1UhjqN66qUSc0UhorCEfw__tU",
  authDomain: "larry-tifena-wedding.firebaseapp.com",
  projectId: "larry-tifena-wedding",
  storageBucket: "larry-tifena-wedding.firebasestorage.app",
  messagingSenderId: "824676186455",
  appId: "1:824676186455:web:bb8adaf962c813ec666612",
  measurementId: "G-E8Y948B7SC"
};

// Inisialisasi Firebase (dengan pengecekan agar tidak render ganda di Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inisialisasi Firestore (Database) dan ekspor variabel 'db'
const db = getFirestore(app);

export { db };