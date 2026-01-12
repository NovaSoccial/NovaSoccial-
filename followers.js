import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove, increment } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

export async function followUser(currentUid, targetUid, isFollowing) {
    const myRef = doc(db, "users", currentUid);
    const targetRef = doc(db, "users", targetUid);

    if (!isFollowing) {
        await updateDoc(myRef, { following: arrayUnion(targetUid) });
        await updateDoc(targetRef, { followers: arrayUnion(currentUid) });
    } else {
        await updateDoc(myRef, { following: arrayRemove(targetUid) });
        await updateDoc(targetRef, { followers: arrayRemove(currentUid) });
    }
}
