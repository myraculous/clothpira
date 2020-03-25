import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD41Isaywg0vp5ml3GOT-1iDwKrH85MbJU",
    authDomain: "clothpira-db.firebaseapp.com",
    databaseURL: "https://clothpira-db.firebaseio.com",
    projectId: "clothpira-db",
    storageBucket: "clothpira-db.appspot.com",
    messagingSenderId: "612712146924",
    appId: "1:612712146924:web:8fe84521b0f31da87842c9",
    measurementId: "G-QD4VTZK4NE"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase; 