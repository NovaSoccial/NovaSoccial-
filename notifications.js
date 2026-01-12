import { getFirestore, collection, query, where, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const db = getFirestore();

export function listenNotifications(uid, callback) {
    const q = query(collection(db, "notifications"), where("targetUid", "==", uid));
    return onSnapshot(q, (snapshot) => {
        const notifs = snapshot.docs.map(doc => doc.data());
        callback(notifs);
    });
}
