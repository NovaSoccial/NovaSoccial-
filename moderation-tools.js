import { getFirestore, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

export async function deletePost(postId) {
    if(confirm("Bu gönderiyi kalıcı olarak silmek istediğine emin misin?")) {
        await deleteDoc(doc(db, "posts", postId));
        alert("Gönderi silindi.");
        window.location.reload();
    }
}

export async function approveUser(uid) {
    await updateDoc(doc(db, "users", uid), { isVerified: true });
    alert("Kullanıcı onaylandı (Mavi Tık verildi).");
}
