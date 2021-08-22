import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDW6yGHhFByIoDeSRT7tLlAjZIG516o0-I",
  authDomain: "foodlink-307.firebaseapp.com",
  projectId: "foodlink-307",
  storageBucket: "foodlink-307.appspot.com",
  messagingSenderId: "936300655651",
  appId: "1:936300655651:web:5b6a5192b42619b529ad96",
  measurementId: "G-M4DS4ZNJSP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();