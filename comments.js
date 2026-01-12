import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

export async function addComment(postId, userId, commentText) {
    if (!commentText.trim()) return;
    await addDoc(collection(db, "comments"), {
        postId: postId,
        userId: userId,
        text: commentText,
        createdAt: serverTimestamp()
    });
    console.log("Yorum yapıldı! 💬");
}
