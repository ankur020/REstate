// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bff3e.firebaseapp.com",
  projectId: "mern-estate-bff3e",
  storageBucket: "mern-estate-bff3e.appspot.com",
  messagingSenderId: "314967652610",
  appId: "1:314967652610:web:4e90c5b12ca09765bdea1b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
