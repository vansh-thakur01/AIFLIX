// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0eIuxPS0_GIz7qOP9gis2jAlf5UvozWM",
  authDomain: "my-version-of-netflix.firebaseapp.com",
  projectId: "my-version-of-netflix",
  storageBucket: "my-version-of-netflix.firebasestorage.app",
  messagingSenderId: "849576663894",
  appId: "1:849576663894:web:ddbf6f4b182672633054f7",
  measurementId: "G-TTTQ40RQRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
