// NovaSoccial Uçtan Uca Şifreleme (E2EE) Altyapısı

const NovaCrypto = {
    // 1. Basit ama etkili bir XOR şifreleme mantığı (Başlangıç seviyesi için)
    // İleride burayı AES-256 gibi askeri düzey sistemlere bağlayabiliriz.
    secretKey: "NOVA_SECURE_2026_KEY", // Bu anahtar sadece kullanıcıda olmalı

    encrypt: function(text) {
        console.log("Mesaj şifreleniyor...");
        let encrypted = "";
        for (let i = 0; i < text.length; i++) {
            encrypted += String.fromCharCode(text.charCodeAt(i) ^ this.secretKey.charCodeAt(i % this.secretKey.length));
        }
        // Şifrelenmiş mesajı Base64 formatına çevirerek okunmaz hale getirir
        return btoa(encrypted);
    },

    decrypt: function(encodedText) {
        console.log("Mesaj çözülüyor...");
        let text = atob(encodedText);
        let decrypted = "";
        for (let i = 0; i < text.length; i++) {
            decrypted += String.fromCharCode(text.charCodeAt(i) ^ this.secretKey.charCodeAt(i % this.secretKey.length));
        }
        return decrypted;
    }
};

// Örnek Kullanım Mantığı:
// Birisi veritabanına sızarsa "Merhaba" yerine "RzsqW14=" gibi bir şey görecek.
// Sadece doğru anahtara sahip olan telefon bunu tekrar "Merhaba" yapabilecek.

console.log("NovaSoccial Güvenlik Kalkanı Aktif! 🛡️");
