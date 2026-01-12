import { applyTheme } from './theme-manager.js';

window.addEventListener('online', () => console.log("Çevrimiçi! 🌐"));
window.addEventListener('offline', () => alert("İnternet bağlantınızı kontrol edin!"));

// Uygulama ilk açıldığında yapılacaklar
const initApp = () => {
    console.log("NovaSoccial Sistemleri Başlatılıyor...");
    const savedTheme = localStorage.getItem('userTheme') || 'dark';
    applyTheme(savedTheme);
};

initApp();
