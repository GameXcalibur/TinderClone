import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGSxyQG1u6KX66tLnc-UyJzhyvsm5PTSo",
    authDomain: "tinder-cd89d.firebaseapp.com",
    projectId: "tinder-cd89d",
    storageBucket: "tinder-cd89d.appspot.com",
    messagingSenderId: "123294797200",
    appId: "1:123294797200:web:57f3e2ee013b5117ef7715",
    measurementId: "G-GGZLJ7LLZ7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;