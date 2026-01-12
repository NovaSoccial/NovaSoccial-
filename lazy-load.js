export const initLazyLoading = () => {
    const images = document.querySelectorAll('img[data-src]');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => observer.observe(img));
};
