// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0iVXyoos8woHoTdRH2sa-t_W4StxeL6k",
  authDomain: "khatamyuk-da0f0.firebaseapp.com",
  projectId: "khatamyuk-da0f0",
  storageBucket: "khatamyuk-da0f0.firebasestorage.app",
  messagingSenderId: "326930014776",
  appId: "1:326930014776:web:e8d755c4fbc43f415d7ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)