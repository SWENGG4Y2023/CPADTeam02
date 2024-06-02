// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvD99ipHUsaAY6b9ji_qn6G23Sy9vu0Fg",
  authDomain: "co2convertor.firebaseapp.com",
  projectId: "co2convertor",
  storageBucket: "co2convertor.appspot.com",
  messagingSenderId: "998164425504",
  appId: "1:998164425504:web:991556d554e4e9b3648545",
  measurementId: "G-1RM3G7V29R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();