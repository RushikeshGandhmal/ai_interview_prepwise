// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBQKvpA6ZhzZ01Z_U4oO3CU6IlKEDqgIV8",
  authDomain: "prepwise-ai-platform.firebaseapp.com",
  projectId: "prepwise-ai-platform",
  storageBucket: "prepwise-ai-platform.firebasestorage.app",
  messagingSenderId: "224926166611",
  appId: "1:224926166611:web:5ceebc99b269ef32d4a0a6",
  measurementId: "G-B35VFKFNRX",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
