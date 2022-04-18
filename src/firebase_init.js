// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQn_yaUSRfOJgiZtoqE-YWrUmsDMHQsU",
  authDomain: "visa-master-8222c.firebaseapp.com",
  projectId: "visa-master-8222c",
  storageBucket: "visa-master-8222c.appspot.com",
  messagingSenderId: "853241272058",
  appId: "1:853241272058:web:bb5c5a622a68919ed45b43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;