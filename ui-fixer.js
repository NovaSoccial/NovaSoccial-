export const fixLayout = () => {
    const height = window.innerHeight;
    document.body.style.minHeight = height + "px";
    // Görseldeki o boşlukları ve taşmaları hizalar
    window.scrollTo(0, 0);
};
