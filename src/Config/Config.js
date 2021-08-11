import firebase from "firebase/app"
import firebase from "firebase"
import "firebase/auth"
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAjky66R9hl3eTrXIw5EGYhyv-C3bGgpUM",
    authDomain: "shangrilla-f5a11.firebaseapp.com",
    projectId: "shangrilla-f5a11",
    storageBucket: "shangrilla-f5a11.appspot.com",
    messagingSenderId: "1070309653925",
    appId: "1:1070309653925:web:7fcf5a0cd92e596aab7c4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 