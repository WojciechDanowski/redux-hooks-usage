import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQC2QRgVYjPSNMLLjtid-0gW7gEF4NjjA",
  authDomain: "react-redux-hooks-704ffa.firebaseapp.com",
  databaseURL: "https://react-redux-hooks-704ffa.firebaseio.com",
  projectId: "react-redux-hooks-704ffa",
  storageBucket: "react-redux-hooks-704ffa.appspot.com",
  messagingSenderId: "655821012839",
  appId: "1:655821012839:web:ec9a16f9b3db4181aef9c2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
