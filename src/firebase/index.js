// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBARuuhkpJf3ZLHLeNVkndpbNOgiMdv37Y",
  authDomain: "sctdr-booking.firebaseapp.com",
  projectId: "sctdr-booking",
  storageBucket: "sctdr-booking.appspot.com",
  messagingSenderId: "901654978050",
  appId: "1:901654978050:web:9262b7bdef919b77b2d11b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// access db anywhere in this app
export { db };
