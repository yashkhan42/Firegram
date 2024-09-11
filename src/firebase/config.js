import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "firegram-5d31e.firebaseapp.com",
  projectId: "firegram-5d31e",
  storageBucket: "firegram-5d31e.appspot.com",
  messagingSenderId: "895457554701",
  appId: "1:895457554701:web:7b96959787b19aaa274044"
};


firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };