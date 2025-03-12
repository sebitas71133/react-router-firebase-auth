// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxF0D5TX5YYgs1WUDlyTKgf1MBEL4iVL0",
  authDomain: "react-curso-9940a.firebaseapp.com",
  projectId: "react-curso-9940a",
  storageBucket: "react-curso-9940a.firebasestorage.app",
  messagingSenderId: "721409813897",
  appId: "1:721409813897:web:98dbb9042c10ac0bb88558",
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebase);
export const Firestore = getFirestore(Firebase);
