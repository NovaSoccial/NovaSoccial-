export const showError = (message) => {
    const errorDiv = document.createElement('div');
    errorDiv.style = "position:fixed; top:20px; left:50%; transform:translateX(-50%); background:#ef4444; color:white; padding:15px 25px; border-radius:10px; z-index:9999; box-shadow: 0 4px 15px rgba(0,0,0,0.3);";
    errorDiv.innerText = "🚨 " + message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.opacity = '0';
        setTimeout(() => errorDiv.remove(), 500);
    }, 3000);
};
