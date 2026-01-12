export const triggerHaptic = () => {
    if ("vibrate" in navigator) {
        navigator.vibrate(12); // Çok kısa, hissedilir ama rahatsız etmez
    }
};
