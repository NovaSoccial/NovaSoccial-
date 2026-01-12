export const openCamera = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        return stream;
    } catch (err) {
        alert("Kameraya erişilemedi: " + err.message);
    }
};
