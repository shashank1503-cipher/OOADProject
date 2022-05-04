// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCosAAbI3BNDsogFJSASvqd907HUorYh94",
  authDomain: "ooad-project-e78b3.firebaseapp.com",
  projectId: "ooad-project-e78b3",
  storageBucket: "ooad-project-e78b3.appspot.com",
  messagingSenderId: "528781445809",
  appId: "1:528781445809:web:b7c3dfb134111605a37090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);