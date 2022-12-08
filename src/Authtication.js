// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3U4umez43jxT_kErUplvkLcKnIla3FZE",
  authDomain: "user-form-130fa.firebaseapp.com",
  projectId: "user-form-130fa",
  storageBucket: "user-form-130fa.appspot.com",
  messagingSenderId: "24706432723",
  appId: "1:24706432723:web:fa148e020eaeaf7ba39e26",
  measurementId: "G-L9RG9BWGQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};