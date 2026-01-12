import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const db = getFirestore();

export async function loadProfileData(uid) {
    const userSnap = await getDoc(doc(db, "users", uid));
    if (userSnap.exists()) {
        const data = userSnap.data();
        document.getElementById('profilePic').src = data.photoURL || 'https://via.placeholder.com/150';
        document.getElementById('displayUserName').innerText = data.displayName || 'İsimsiz Kullanıcı';
        document.getElementById('userHandle').innerText = `@${data.username || 'user'}`;
    }
}
