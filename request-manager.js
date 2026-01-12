import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const db = getFirestore();

export async function handleRequest(myUid, requesterUid, action) {
    const myRef = doc(db, "users", myUid);
    if (action === 'approve') {
        await updateDoc(myRef, { 
            followers: arrayUnion(requesterUid),
            pendingRequests: arrayRemove(requesterUid) 
        });
        alert("İstek onaylandı!");
    } else {
        await updateDoc(myRef, { pendingRequests: arrayRemove(requesterUid) });
        alert("İstek reddedildi.");
    }
}
