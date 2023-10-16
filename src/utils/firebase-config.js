import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCyM-6cQ52UGCbfO3J4NKVKZ5orPmqfzvY",
  authDomain: "react-netflix-clone-7e6ca.firebaseapp.com",
  projectId: "react-netflix-clone-7e6ca",
  storageBucket: "react-netflix-clone-7e6ca.appspot.com",
  messagingSenderId: "339520997974",
  appId: "1:339520997974:web:9cd1750b60a759e4ce49f7",
  measurementId: "G-5RM13M5QP9"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
