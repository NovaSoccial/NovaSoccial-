export const initInteractions = () => {
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.navigator.vibrate) window.navigator.vibrate(10); // Hafif titreşim
        });
    });
};
