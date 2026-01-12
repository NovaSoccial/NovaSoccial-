import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Yapılandırması (Senin Panelinden Alınan Bilgiler)
const firebaseConfig = {
  apiKey: "AIzaSyBA1H0C7y4Cbt2ZUBtGRnvu-HgPv8F-iog", 
  authDomain: "novasoccial.firebaseapp.com",
  projectId: "novasoccial",
  storageBucket: "novasoccial.firebasestorage.app",
  messagingSenderId: "680106218526",
  appId: "1:680106218526:web:0edcdbe46ff1c84582ca0f"
};

// Sistemi Başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Dosyanın yüklendiğini teyit et (Site açılınca altta görünür, sonra silebilirsin)
console.log("Nova Social Motoru Başlatıldı.");

window.onload = () => {
    const googleBtn = document.getElementById('googleLogin');
    const phoneBtn = document.getElementById('phoneLogin');

    // 1. Google Giriş Butonu
    if (googleBtn) {
        googleBtn.onclick = async () => {
            try {
                // Butona basıldığını anlamak için geçici bir alert
                console.log("Google penceresi açılıyor...");
                
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                
                console.log("Giriş Başarılı:", user.displayName);
                
                // Başarılı giriş sonrası ana sayfaya yönlendir
                // Klasör ismin NovaSocial- olduğu için yolu buna göre ayarladık
                window.location.href = "./home.html"; 
                
            } catch (error) {
                console.error("Hata Detayı:", error);
                // Hata varsa kullanıcıya göster
                alert("Giriş Yapılamadı: " + error.message);
            }
        };
    }

    // 2. Telefon Giriş Butonu (Şu anlık sadece bilgi verir)
    if (phoneBtn) {
        phoneBtn.onclick = () => {
            alert("Telefon ile giriş sistemi (2FA) yakında aktif edilecek.");
        };
    }
};

// Sayfa yenilenirse veya hata olursa konsola yaz
window.addEventListener('unhandledrejection', function(event) {
    console.warn('Beklenmedik bir hata oluştu:', event.reason);
});
