// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from "firebase/auth"
import {getFirestore}  from "firebase/firestore/lite"
import {getStorage}  from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: "task-app-6073.firebaseapp.com",
  projectId: "task-app-6073",
  storageBucket: "task-app-6073.appspot.com",
  messagingSenderId: "620048199386",
  appId: "1:620048199386:web:48c56c90d2a9ae20ddffe3",
  measurementId: "G-K7V9R5Z2RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export {analytics, auth , firestore, storage }