import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAc82EK699FORp4TndLpYxJ-qPaQkS8RSQ",
    authDomain: "fireblogsyt-e3954.firebaseapp.com",
    projectId: "fireblogsyt-e3954",
    storageBucket: "fireblogsyt-e3954.appspot.com",
    messagingSenderId: "780919466408",
    appId: "1:780919466408:web:a56990e53025f3187a159d",
    measurementId: "G-G1C175VV05"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { timestamp };
  export default firebaseApp.firestore();