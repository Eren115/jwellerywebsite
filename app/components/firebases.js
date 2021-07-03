import firebase from "firebase";

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBE4TkSaWdTZ2kIa3db-u1ChNt_ZFNFiCc",
//   authDomain: "jwelleryweb.firebaseapp.com",
//   projectId: "jwelleryweb",
//   storageBucket: "jwelleryweb.appspot.com",
//   messagingSenderId: "356697819708",
//   appId: "1:356697819708:web:35f8a5552872e67f7dd139"
// });
    
// const db = firebaseApp.firestore();


// export { db };

// const firebaseConfig = {
//   apiKey: "AIzaSyBE4TkSaWdTZ2kIa3db-u1ChNt_ZFNFiCc",
//   authDomain: "jwelleryweb.firebaseapp.com",
//   projectId: "jwelleryweb",
//   storageBucket: "jwelleryweb.appspot.com",
//   messagingSenderId: "356697819708",
//   appId: "1:356697819708:web:35f8a5552872e67f7dd139"
// };

// // firebase.initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }else {
//   firebase.app(); // if already initialized, use that one
// }

// const db = firebase.firestore();
 
// export { db }


try {
  firebase.initializeApp({
    apiKey: "AIzaSyBE4TkSaWdTZ2kIa3db-u1ChNt_ZFNFiCc",
    authDomain: "jwelleryweb.firebaseapp.com",
    projectId: "jwelleryweb",
    storageBucket: "jwelleryweb.appspot.com",
    messagingSenderId: "356697819708",
    appId: "1:356697819708:web:35f8a5552872e67f7dd139"
  })
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const db = firebase.firestore();

export default db
