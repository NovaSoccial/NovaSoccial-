export const setMetaTags = (title, description) => {
    document.title = `${title} | Nova Soccial `; [cite: 2026-01-11]
    document.querySelector('meta[name="description"]').setAttribute("content", description);
    // Sosyal medya önizleme resmi
    document.querySelector('meta[property="og:title"]').setAttribute("content", title);
};
