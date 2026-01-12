import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const db = getFirestore();

export async function searchUser(username) {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    let results = [];
    querySnapshot.forEach((doc) => results.push(doc.data()));
    return results;
}
