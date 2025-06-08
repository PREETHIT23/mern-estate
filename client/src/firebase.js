// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8f229.firebaseapp.com",
  projectId: "mern-estate-8f229",
  storageBucket: "mern-estate-8f229.firebasestorage.app",
  messagingSenderId: "50596014660",
  appId: "1:50596014660:web:6c6a70215e782155d96a11"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

