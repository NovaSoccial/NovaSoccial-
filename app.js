import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBA1H0C7y4Cbt2ZUBtGRnvu-HgPv8F-iog", 
  authDomain: "novasoccial.firebaseapp.com",
  projectId: "novasoccial",
  storageBucket: "novasoccial.firebasestorage.app",
  messagingSenderId: "680106218526",
  appId: "1:680106218526:web:0edcdbe46ff1c84582ca0f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Buton tıklandığında kesin çalışması için:
window.onload = () => {
    const btn = document.getElementById('googleLogin');
    if(btn) {
        btn.onclick = () => {
            console.log("Butona basıldı!");
            signInWithPopup(auth, provider)
                .then((result) => {
                    window.location.href = "/NovaSocial-/home.html";
                })
                .catch((err) => {
                    alert("Hata: " + err.message);
                });
        };
    }
};
