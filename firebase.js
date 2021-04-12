import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCQXM1XQvZF1tIFokj4Qf_I4ES6WWwOxc",
  authDomain: "whatsapp-2-4364a.firebaseapp.com",
  projectId: "whatsapp-2-4364a",
  storageBucket: "whatsapp-2-4364a.appspot.com",
  messagingSenderId: "474870652585",
  appId: "1:474870652585:web:cdceca188e7fb170c7d3b8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
