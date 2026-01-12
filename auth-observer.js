import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

export const checkAuthStatus = () => {
    onAuthStateChanged(auth, (user) => {
        if (!user && window.location.pathname !== "/index.html") {
            window.location.href = "index.html";
        } else if (user && window.location.pathname === "/index.html") {
            window.location.href = "home.html";
        }
    });
};

// Sayfa her açıldığında kontrol et
checkAuthStatus();
