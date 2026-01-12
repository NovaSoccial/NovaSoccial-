import { getFirestore, doc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

export async function likePost(postId) {
    const postRef = doc(db, "posts", postId);
    try {
        await updateDoc(postRef, {
            likes: increment(1)
        });
        console.log("Beğenildi! ❤️");
    } catch (error) {
        console.error("Beğeni hatası:", error);
    }
}
