// NovaSoccial Reklam Yönetimi
export const showInterstitialAd = () => {
    console.log("Reklam yükleniyor... (AdMob)");
    // Buraya ileride Google'dan aldığın reklam ID'sini koyacağız
    // Şimdilik sadece simüle ediyoruz
};

export const createBannerAd = (containerId) => {
    const container = document.getElementById(containerId);
    if(container) {
        container.innerHTML = `<div style="width:100%; height:50px; background:#1e293b; color:#64748b; display:flex; align-items:center; justify-content:center; font-size:12px;">REKLAM ALANI</div>`;
    }
};
