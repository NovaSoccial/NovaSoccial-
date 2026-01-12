import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// BURAYI KENDİ BİLGİLERİNLE DOLDUR (Firebase Panelinden Al)
const firebaseConfig = {
  apiKey: "AIzaSyBA1H0C7y4Cbt2ZUBtGRnvu-HgPv8F-iog", 
  authDomain: "novasoccial.firebaseapp.com",
  projectId: "novasoccial",
  storageBucket: "novasoccial.firebasestorage.app",
  messagingSenderId: "680106218526",
  appId: "1:680106218526:web:0edcdbe46ff1c84582ca0f"
};

// 1. Sistemi Başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// 2. Butonları Tanımla ve Tıklama Testi Ekle
document.addEventListener('DOMContentLoaded', () => {
    const googleBtn = document.getElementById('googleLogin');
    const phoneBtn = document.getElementById('phoneLogin');

    // Google Giriş İşlemi
    if(googleBtn) {
        googleBtn.addEventListener('click', () => {
            console.log("Google butonuna basıldı..."); // Tarayıcı konsolunda görünür
            alert("Google penceresi açılıyor, lütfen bekleyin..."); 
            
            signInWithPopup(auth, googleProvider)
                .then((result) => {
                    console.log("Giriş başarılı:", result.user);
                    window.location.href = "./home.html"; // Başarılıysa yönlendir
                })
                .catch((error) => {
                    console.error("Hata kodu:", error.code);
                    alert("Giriş Hatası: " + error.message);
                });
        });
    }

    // Telefon Giriş İşlemi (Simülasyon)
    if(phoneBtn) {
        phoneBtn.addEventListener('click', () => {
            alert("Telefonla giriş sistemi (2FA) şu an hazırlık aşamasında.");
        });
    }
});

console.log("Nova Soccial JavaScript motoru çalışıyor.");
