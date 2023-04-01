// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqCIDzgfcLAwrxzl4g5zlMeYqvgt92kIA",
  authDomain: "search-5d5f4.firebaseapp.com",
  projectId: "search-5d5f4",
  storageBucket: "search-5d5f4.appspot.com",
  messagingSenderId: "418792232686",
  appId: "1:418792232686:web:b092f427d961f1de5bc5ff",
  measurementId: "G-NRSR2XM7ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth= getAuth();
export {app,Auth}