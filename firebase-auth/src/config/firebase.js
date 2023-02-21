// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiw3AIH8LJJOlJBzpGZMOn0JpZY89QUX4",
  authDomain: "ecommerce-web-app-6073.firebaseapp.com",
  projectId: "ecommerce-web-app-6073",
  storageBucket: "ecommerce-web-app-6073.appspot.com",
  messagingSenderId: "171935492241",
  appId: "1:171935492241:web:a3e7148687224ce71df730",
  measurementId: "G-43XC8XYLXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {analytics, auth}