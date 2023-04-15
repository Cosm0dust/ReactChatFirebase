// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHHKrhwJ11pAUg1x2LDMVvHjfa8IsiJiE",
    authDomain: "chat-cc8fb.firebaseapp.com",
    projectId: "chat-cc8fb",
    storageBucket: "chat-cc8fb.appspot.com",
    messagingSenderId: "986978684704",
    appId: "1:986978684704:web:8b1fac8351da547ae15145",
    measurementId: "G-YHPK1SPWKE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

const analytics = getAnalytics(app);