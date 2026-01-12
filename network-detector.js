export const watchConnection = () => {
    window.addEventListener('offline', () => {
        const warning = document.createElement('div');
        warning.id = "net-warning";
        warning.style = "position:fixed; bottom:60px; left:50%; transform:translateX(-50%); background:#262626; color:white; padding:8px 20px; border-radius:20px; font-size:12px; z-index:9999;";
        warning.innerText = "İnternet bağlantısı kesildi ⚠️";
        document.body.appendChild(warning);
    });

    window.addEventListener('online', () => {
        const warning = document.getElementById('net-warning');
        if(warning) warning.remove();
    });
};
