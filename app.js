import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Senin özel Firebase bilgilerin
const firebaseConfig = {
  apiKey: "AIzaSyBA1H0C7y4Cbt2ZUBtGRnvu-HgPv8F-iog",
  authDomain: "novasoccial.firebaseapp.com",
  databaseURL: "https://novasoccial-default-rtdb.firebaseio.com",
  projectId: "novasoccial",
  storageBucket: "novasoccial.firebasestorage.app",
  messagingSenderId: "680106218526",
  appId: "1:680106218526:web:0edcdbe46ff1c84582ca0f"
};

// Başlatma
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'tr';

// 1. Google ile Giriş
async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        alert("Hoş geldin: " + result.user.displayName);
        window.location.href = "home.html";
    } catch (error) {
        alert("Hata: " + error.message);
    }
}

// 2. Telefon ile Giriş (SMS / 2FA)
async function loginWithPhone() {
    const phoneNumber = prompt("Telefon numaranızı girin (Örn: +90555...):");
    if (!phoneNumber) return;

    // Görünmez güvenlik kontrolü
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible'
    });

    try {
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
        const code = prompt("Gelen 6 haneli kodu girin:");
        const result = await confirmationResult.confirm(code);
        alert("Telefon doğrulandı! Giriş yapılıyor...");
        window.location.href = "home.html";
    } catch (error) {
        alert("Kod hatalı veya bir sorun oluştu: " + error.message);
    }
}

// Butonları Bağla
document.addEventListener('DOMContentLoaded', () => {
    const googleBtn = document.querySelector('.google-btn');
    const phoneBtn = document.querySelector('.phone-btn');

    if(googleBtn) googleBtn.onclick = loginWithGoogle;
    if(phoneBtn) phoneBtn.onclick = loginWithPhone;
});
