export const clearAppCache = async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
        cacheNames.map(name => caches.delete(name))
    );
    localStorage.clear();
    console.log("Uygulama belleği tertemiz yapıldı.");
};
