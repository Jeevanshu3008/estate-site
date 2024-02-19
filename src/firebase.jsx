// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-990de.firebaseapp.com",
  projectId: "mern-estate-990de",
  storageBucket: "mern-estate-990de.appspot.com",
  messagingSenderId: "394509442084",
  appId: "1:394509442084:web:82aa555db1b34e6e408cb1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
