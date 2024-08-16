// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuYF2ryG3KKOql5LDv5gocCmeUWUaB4c0",
  authDomain: "playcal-f0d6d.firebaseapp.com",
  databaseURL:
    "https://playcal-f0d6d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "playcal-f0d6d",
  storageBucket: "playcal-f0d6d.appspot.com",
  messagingSenderId: "1056311101026",
  appId: "1:1056311101026:web:672d0633f03e556710b33b",
  measurementId: "G-4C5H7B7R4W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
