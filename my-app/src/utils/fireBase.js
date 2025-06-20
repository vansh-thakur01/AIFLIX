// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVhcUYWE0NVKh2Xle4L3K3MI0qL-mtaMk",
  authDomain: "a-netflix.firebaseapp.com",
  projectId: "a-netflix",
  storageBucket: "a-netflix.firebasestorage.app",
  messagingSenderId: "177858047016",
  appId: "1:177858047016:web:22062cee34d3cc250ad91d",
  measurementId: "G-NL46QP8YQE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

