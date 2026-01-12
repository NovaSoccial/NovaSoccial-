// Kodların sağ tıkla incelenmesini zorlaştırır
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = (e) => {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) return false;
};
