// NovaSoccial Güvenlik ve Giriş Mantığı

// 1. Yanlış şifre denemelerini takip eden sistem (Brute-Force Koruması)
let loginAttempts = 0;
const MAX_ATTEMPTS = 5;

// 2. Google ile Giriş Fonksiyonu
function loginWithGoogle() {
    console.log("Google Auth başlatılıyor...");
    // Burada ileride Firebase bağlayacağız
    alert("NovaSoccial: Google güvenli giriş kapısına yönlendiriliyorsunuz.");
}

// 3. Telefon ve 2FA (2 Faktörlü Doğrulama) Mantığı
function startPhoneAuth() {
    const phoneNumber = prompt("Lütfen telefon numaranızı girin (2FA için):");
    
    if (phoneNumber) {
        console.log("SMS Kodu gönderiliyor: " + phoneNumber);
        
        // 2FA Simülasyonu
        const securityCode = prompt("Telefonunuza gelen 6 haneli kodu girin:");
        
        if (securityCode === "123456") { // Test için geçici kod
            alert("Doğrulama başarılı! NovaSoccial dünyasına hoş geldin.");
            window.location.href = "home.html"; // Giriş sonrası ana sayfaya yönlendirme
        } else {
            loginAttempts++;
            alert(`Hatalı kod! Kalan deneme hakkı: ${MAX_ATTEMPTS - loginAttempts}`);
            
            if (loginAttempts >= MAX_ATTEMPTS) {
                alert("Çok fazla hatalı deneme! Güvenlik nedeniyle hesap geçici olarak kilitlendi.");
            }
        }
    }
}

// Butonlara görev atama (Sayfa yüklendiğinde)
document.addEventListener('DOMContentLoaded', () => {
    const googleBtn = document.querySelector('.google-btn');
    const phoneBtn = document.querySelector('.phone-btn');

    if(googleBtn) googleBtn.onclick = loginWithGoogle;
    if(phoneBtn) phoneBtn.onclick = startPhoneAuth;
});
