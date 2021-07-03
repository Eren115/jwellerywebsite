import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBE4TkSaWdTZ2kIa3db-u1ChNt_ZFNFiCc",
    authDomain: "jwelleryweb.firebaseapp.com",
    projectId: "jwelleryweb",
    storageBucket: "jwelleryweb.appspot.com",
    messagingSenderId: "356697819708",
    appId: "1:356697819708:web:35f8a5552872e67f7dd139"
  });
  
  const db = firebaseApp.firestore();

  export { db };

