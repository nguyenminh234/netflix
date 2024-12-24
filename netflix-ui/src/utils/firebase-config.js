// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDOUMzP3a2g7hD_0dOB0Dw28swDO4ykyeU",
  authDomain: "react-netflix-clone-9d33e.firebaseapp.com",
  projectId: "react-netflix-clone-9d33e",
  storageBucket: "react-netflix-clone-9d33e.firebasestorage.app",
  messagingSenderId: "323041963101",
  appId: "1:323041963101:web:d1e70319919e0ec523b1b4",
  measurementId: "G-M8XG531PM0"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);