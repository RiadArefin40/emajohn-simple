// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAoNycPAtwXFsH0CxD_WfdVReZAb6zjq0",
  authDomain: "ema-john-simple-d867e.firebaseapp.com",
  projectId: "ema-john-simple-d867e",
  storageBucket: "ema-john-simple-d867e.appspot.com",
  messagingSenderId: "15044188955",
  appId: "1:15044188955:web:233f819c3233d10284d1be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;