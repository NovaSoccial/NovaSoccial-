import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Kullanıcı verilerini Firestore'a kaydetme
export async function saveUserData(user) {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        await setDoc(userRef, {
            uid: user.uid,
            displayName: user.displayName || "Yeni Kullanıcı",
            email: user.email || "",
            photoURL: user.photoURL || "https://via.placeholder.com/150",
            username: (user.email ? user.email.split('@')[0] : user.uid.substring(0, 5)),
            bio: "Hibrit dünyaya katıldı!",
            followers: 0,
            following: 0,
            createdAt: serverTimestamp()
        });
        console.log("Kullanıcı ilk kez kaydedildi! ✅");
    }
}
