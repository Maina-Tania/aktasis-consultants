// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyTX9TxVm7NMtj7roK74oKXQkKxqtbC9A",
  authDomain: "aktasis-b3364.firebaseapp.com",
  projectId: "aktasis-b3364",
  storageBucket: "aktasis-b3364.firebasestorage.app",
  messagingSenderId: "749528232407",
  appId: "1:749528232407:web:597396aa055548273edb92",
  measurementId: "G-9YDRD4RQC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 