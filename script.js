// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC653RoCoeXnuM9fgo21oWAkU4ovw9aTyU",
  authDomain: "glow-by-silvia.firebaseapp.com",
  projectId: "glow-by-silvia",
  storageBucket: "glow-by-silvia.firebasestorage.app",
  messagingSenderId: "1098215684788",
  appId: "1:1098215684788:web:c05add7c745263d946b5e1",
  measurementId: "G-JR76RYN39E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);