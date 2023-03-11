// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHoJhilJfOdohNjX-MWPh0HUlTsfrXmJY",
  authDomain: "tareas-ob.firebaseapp.com",
  projectId: "tareas-ob",
  storageBucket: "tareas-ob.appspot.com",
  messagingSenderId: "1009615104275",
  appId: "1:1009615104275:web:ca8cec6d237b1b4c4052e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Inicializar Firestore

export const db = getFirestore();