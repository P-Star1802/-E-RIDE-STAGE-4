import firebase from "firebase";


//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDsTAtuK-6Y-iN_0AOP22dWwzFnR3U8KI8",
    authDomain: "e-ride-stage-4-d56aa.firebaseapp.com",
    projectId: "e-ride-stage-4-d56aa",
    storageBucket: "e-ride-stage-4-d56aa.appspot.com",
    messagingSenderId: "895909010205",
    appId: "1:895909010205:web:e15efc6c48fc0a0d619ff4"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


