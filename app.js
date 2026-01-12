import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// BURAYI KENDİ BİLGİLERİNLE DOLDUR (Fotoğrafta attığın yer)
const firebaseConfig = {
  apiKey: "AIzaSyBA1H0C7y4Cbt2ZUBtGRnvu-HgPv8F-iog", 
  authDomain: "novasoccial.firebaseapp.com",
  projectId: "novasoccial",
storageBucket:novasoccial.firebasestorage.app ,
  messagingSenderId: "680106218526",
  appId: "1:680106218526:web:0edcdbe46ff1c84582ca0f"
};

// Uygulamayı Başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// 1. GOOGLE GİRİŞİ
const googleBtn = document.getElementById('googleLogin');
if(googleBtn) {
    googleBtn.addEventListener('click', () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                window.location.href = "./home.html"; // Giriş başarılıysa ana sayfaya git
            }).catch((error) => {
                alert("Hata: " + error.message);
            });
    });
}

// 2. TELEFON GİRİŞİ (Basit Başlatıcı)
const phoneBtn = document.getElementById('phoneLogin');
if(phoneBtn) {
    phoneBtn.addEventListener('click', () => {
        const phoneNumber = prompt("Telefon numaranızı yazın (+90...):");
        if (phoneNumber) {
            alert("Telefon giriş sistemi aktif ediliyor, lütfen Firebase panelinden domain izinlerini kontrol edin.");
            // Telefon doğrulaması için RecaptchaVerifier gereklidir.
        }
    });
}

console.log("Nova Soccial sistemi hazır.");
