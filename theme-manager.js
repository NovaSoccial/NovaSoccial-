// NovaSoccial Dinamik Tema Sistemi
const themes = {
    dark: { bg: "#0f172a", text: "#f8fafc", neon: "#8b5cf6" },
    neon: { bg: "#000000", text: "#ffffff", neon: "#00ff00" }
};

export function applyTheme(themeName) {
    const theme = themes[themeName] || themes.dark;
    document.documentElement.style.setProperty('--bg-dark', theme.bg);
    document.documentElement.style.setProperty('--text-white', theme.text);
    document.documentElement.style.setProperty('--neon-purple', theme.neon);
    localStorage.setItem('userTheme', themeName);
}

// Sayfa yüklendiğinde tercihi hatırla
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('userTheme') || 'dark';
    applyTheme(saved);
});
