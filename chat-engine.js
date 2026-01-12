import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

export function listenMessages(chatId, callback) {
    const q = query(collection(db, "chats", chatId, "messages"), orderBy("createdAt", "asc"));
    return onSnapshot(q, (snapshot) => {
        const msgs = snapshot.docs.map(doc => doc.data());
        callback(msgs);
    });
}

export async function sendMessage(chatId, senderId, text) {
    await addDoc(collection(db, "chats", chatId, "messages"), {
        senderId,
        text,
        createdAt: serverTimestamp()
    });
}
