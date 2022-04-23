// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAni8W5xsuRWYLA7eVpTNRIJqJUFcrIgwE",
  authDomain: "genius-car-d2a2c.firebaseapp.com",
  projectId: "genius-car-d2a2c",
  storageBucket: "genius-car-d2a2c.appspot.com",
  messagingSenderId: "45516617967",
  appId: "1:45516617967:web:258086a3b9531c0978031a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
