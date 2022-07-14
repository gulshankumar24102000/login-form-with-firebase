// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxC_hukWwD-pwNRlqb6XY0PqUzr5lzLAQ",
  authDomain: "evd-firebase.firebaseapp.com",
  projectId: "evd-firebase",
  storageBucket: "evd-firebase.appspot.com",
  messagingSenderId: "893477588779",
  appId: "1:893477588779:web:061576f7ba17ac962bff6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth,provider }