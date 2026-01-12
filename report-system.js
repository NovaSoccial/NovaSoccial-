import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

export async function reportContent(postId, reason, reporterUid) {
    try {
        await addDoc(collection(db, "reports"), {
            postId: postId,
            reason: reason,
            reporterUid: reporterUid,
            status: "pending", // Admin bakana kadar beklemede
            createdAt: serverTimestamp()
        });
        alert("Bildiriminiz alındı, inceleyeceğiz. Teşekkürler!");
    } catch (error) {
        console.error("Şikayet hatası:", error);
    }
}
