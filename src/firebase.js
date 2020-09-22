import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMXxnf10bsE-W79w7Vt_FKhdyeoIAR5fw",
  authDomain: "fir-4c603.firebaseapp.com",
  databaseURL: "https://fir-4c603.firebaseio.com",
  projectId: "fir-4c603",
  storageBucket: "fir-4c603.appspot.com",
  messagingSenderId: "513079238706",
  appId: "1:513079238706:web:401e71e77c50d1e8d09c2b",
  measurementId: "G-NJFKC4BSEH",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
