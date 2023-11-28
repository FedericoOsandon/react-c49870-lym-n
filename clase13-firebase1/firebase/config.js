// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQmkomcgXkySSFxOi2ffHmTL8lqHLoM2c",
  authDomain: "comision49870.firebaseapp.com",
  projectId: "comision49870",
  storageBucket: "comision49870.appspot.com",
  messagingSenderId: "751080162771",
  appId: "1:751080162771:web:8792e04f0dbd8f0267db26"
};

// Initialize Firebasee
const app = initializeApp(firebaseConfig)

export const firebaseConnect = () => app

