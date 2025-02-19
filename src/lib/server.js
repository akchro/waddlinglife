import { getFirestore, collection, addDoc, query, getDocs, where, orderBy, limit, serverTimestamp, startAfter } from "firebase/firestore";
import firebaseApp from "@/app/firebase";


const handleSubmit = async (setSubmitted, message, userColor) => {
    const db = getFirestore(firebaseApp);
    localStorage.setItem('submitted', 'true')
    localStorage.setItem('message', message)
    localStorage.setItem('color', userColor)
    setSubmitted(true);

    // Check if the message already exists in the Firestore collection
    const messagesRef = collection(db, "messages");
    const q = query(messagesRef, where("message", "==", message));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
        try {
            // Push the new message object to Firestore if it doesn't exist
            await addDoc(collection(db, "messages"), {
                message: message,
                color: userColor,
                timestamp: serverTimestamp(),
            });
            console.log("Message added to Firestore");
        } catch (e) {
            console.error("Error adding document");
        }
    } else {
        console.log("Message already exists!");
        // You can show an error or take another action here
    }
};


const fetchRecentMessages = async (lastDoc = null) => {
    const db = getFirestore(firebaseApp);
    const messagesRef = collection(db, "messages");

    let q = query(messagesRef, orderBy("timestamp", "desc"), limit(10));

    if (lastDoc) {
        q = query(messagesRef, orderBy("timestamp", "desc"), startAfter(lastDoc), limit(10));
    }

    const querySnapshot = await getDocs(q);

    // Get the last document for pagination
    const lastVisible = querySnapshot.docs.length > 0 ? querySnapshot.docs[querySnapshot.docs.length - 1] : null;

    const recentMessages = querySnapshot.docs.map(doc => ({
        message: doc.data().message,
        color: doc.data().color,
    }));

    console.log(recentMessages)

    return { recentMessages, lastVisible };
};


export { handleSubmit, fetchRecentMessages }