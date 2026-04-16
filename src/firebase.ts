// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSfhfjZLk6jFjr7YQoyCnieCiPW9hMA3E",
  authDomain: "aktasis-consultancy.firebaseapp.com",
  projectId: "aktasis-consultancy",
  storageBucket: "aktasis-consultancy.firebasestorage.app",
  messagingSenderId: "578080749619",
  appId: "1:578080749619:web:df3f8d0b60179a7eaa8b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 