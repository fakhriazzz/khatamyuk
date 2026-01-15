// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsgnC0Y4AX1HCKQ5k4LLaJRt3vaKDcd3o",
  authDomain: "khatamyuk-6e62c.firebaseapp.com",
  projectId: "khatamyuk-6e62c",
  storageBucket: "khatamyuk-6e62c.firebasestorage.app",
  messagingSenderId: "732637934740",
  appId: "1:732637934740:web:b34605a2b9c0d4a9f7f081"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)