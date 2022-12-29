// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYRNEn3WJe3S96F-AsmwvQNWqMs_V2l3Q",
  authDomain: "todo-8cda9.firebaseapp.com",
  projectId: "todo-8cda9",
  storageBucket: "todo-8cda9.appspot.com",
  messagingSenderId: "994881970472",
  appId: "1:994881970472:web:9ae1af311b4f1a74f9f01d",
  measurementId: "G-HXH9QEJLZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app