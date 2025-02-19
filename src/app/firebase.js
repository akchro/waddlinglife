// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKzGoTe64VBCdvJQggpCAslcKdAFOl1TU",
    authDomain: "lifewaffle-d4dd8.firebaseapp.com",
    projectId: "lifewaffle-d4dd8",
    storageBucket: "lifewaffle-d4dd8.firebasestorage.app",
    messagingSenderId: "492066747839",
    appId: "1:492066747839:web:cb745a64d956a3555c1d0a",
    measurementId: "G-ET9VKVRJ8Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp