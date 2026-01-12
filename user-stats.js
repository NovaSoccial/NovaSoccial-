import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export const watchUserStats = (uid, callback) => {
    const db = getFirestore();
    return onSnapshot(doc(db, "users", uid), (doc) => {
        const data = doc.data();
        callback({
            followers: data.followers?.length || 0,
            following: data.following?.length || 0
        });
    });
};
