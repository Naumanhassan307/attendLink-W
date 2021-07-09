import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDneMlwnuJ8hMQnUzpXSKrFGRd5Cd1lzRg",
  authDomain: "attendlink.firebaseapp.com",
  projectId: "attendlink",
  storageBucket: "attendlink.appspot.com",
  messagingSenderId: "349622750072",
  appId: "1:349622750072:web:ea780f117975990345168d",
  measurementId: "G-NDD1NH4MHN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();