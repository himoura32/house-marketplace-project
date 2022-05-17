// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-YBokn-msmZRkLxlF8Q-A1UQuyLEfJY4",
  authDomain: "house-marketplace-app-8d360.firebaseapp.com",
  projectId: "house-marketplace-app-8d360",
  storageBucket: "house-marketplace-app-8d360.appspot.com",
  messagingSenderId: "937581460175",
  appId: "1:937581460175:web:de32f66c05b399668f15ba"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
