import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const placeholderText = document.getElementById('placeholderText');
const uploadBtn = document.getElementById('uploadBtn');

// Önizleme Göster
fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            imagePreview.src = reader.result;
            imagePreview.style.display = 'block';
            placeholderText.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
};

// Firebase'e Yükle
uploadBtn.onclick = async () => {
    const file = fileInput.files[0];
    const caption = document.getElementById('caption').value;

    if (!file) return alert("Lütfen bir dosya seçin!");

    uploadBtn.innerText = "Yükleniyor...";
    uploadBtn.disabled = true;

    try {
        const storageRef = ref(storage, 'posts/' + Date.now() + "_" + file.name);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);

        await addDoc(collection(db, "posts"), {
            imageUrl: url,
            caption: caption,
            createdAt: serverTimestamp(),
            likes: 0
        });

        alert("Başarıyla paylaşıldı!");
        window.location.href = "home.html";
    } catch (error) {
        alert("Hata: " + error.message);
        uploadBtn.innerText = "Paylaş";
        uploadBtn.disabled = false;
    }
};
