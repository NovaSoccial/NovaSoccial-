let lastActionTime = 0;
export const isActionAllowed = () => {
    const now = Date.now();
    if (now - lastActionTime < 1000) { // 1 saniyeden kısa sürede işlem yapılamaz
        console.warn("Çok hızlı işlem yapıyorsun!");
        return false;
    }
    lastActionTime = now;
    return true;
};
