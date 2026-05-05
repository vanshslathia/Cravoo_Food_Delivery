// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "cravoofooddelivery.firebaseapp.com",
  projectId: "cravoofooddelivery",
  storageBucket: "cravoofooddelivery.firebasestorage.app",
  messagingSenderId: "50198518344",
  appId: "1:50198518344:web:f25947ddc39eab9de8967d",
  measurementId: "G-EQGSNM6RYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}