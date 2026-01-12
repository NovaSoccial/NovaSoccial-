export const startLoadingBar = () => {
    let bar = document.getElementById('loading-bar');
    if (!bar) {
        bar = document.createElement('div');
        bar.id = 'loading-bar';
        bar.style = "position:fixed; top:0; left:0; height:2px; background:#0095f6; z-index:10000; transition: width 0.4s ease;";
        document.body.appendChild(bar);
    }
    bar.style.width = "30%";
    setTimeout(() => bar.style.width = "100%", 200);
    setTimeout(() => bar.style.width = "0%", 800);
};
