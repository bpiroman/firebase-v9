// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2_3yV3x0fhggz5nYDx9tCHI_Xry_jjRI",
  authDomain: "fir-v9-code.firebaseapp.com",
  projectId: "fir-v9-code",
  storageBucket: "fir-v9-code.appspot.com",
  messagingSenderId: "348695332605",
  appId: "1:348695332605:web:e75b98129bdc615160a094",
  measurementId: "G-HM6QFV09CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);