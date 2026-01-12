export const formatTime = (date) => {
    const seconds = Math.floor((new Date() - date.toDate()) / 1000);
    if (seconds < 60) return "Şimdi";
    const minutes = Math.floor(seconds / 60);
    return `${minutes} dk önce`;
};
