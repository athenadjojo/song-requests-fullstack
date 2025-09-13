// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmW-hM9bkxBncKyDyL8UAFuKku5ITfmIc",
  authDomain: "song-requests-fullstack.firebaseapp.com",
  projectId: "song-requests-fullstack",
  storageBucket: "song-requests-fullstack.firebasestorage.app",
  messagingSenderId: "328667584509",
  appId: "1:328667584509:web:dd7ca8591b4be5d60dab94",
  measurementId: "G-JR9L490RKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
