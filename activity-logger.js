export const logActivity = (type, detail) => {
    const logs = JSON.parse(localStorage.getItem('userLogs') || '[]');
    logs.push({ type, detail, time: new Date().toISOString() });
    localStorage.setItem('userLogs', JSON.stringify(logs.slice(-20))); // Son 20 kayıt
};
