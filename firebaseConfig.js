// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbyGzuDryx_28x4i0OyGCoqxXtxuqEPX8",
  authDomain: "personal-portfolio-5ae06.firebaseapp.com",
  projectId: "personal-portfolio-5ae06",
  storageBucket: "personal-portfolio-5ae06.appspot.com",
  messagingSenderId: "969484641455",
  appId: "1:969484641455:web:706140b04e4614a7b9e05a",
  measurementId: "G-D42ENMHQHS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);