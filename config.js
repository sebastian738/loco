import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here


const firebaseConfig = {
    apiKey: "AIzaSyBvVs5_a3nCVH9UoOvSYKTRVo3wMWjeC6k",
    authDomain: "piron-e162a.firebaseapp.com",
    projectId: "piron-e162a",
    storageBucket: "piron-e162a.appspot.com",
    messagingSenderId: "142518717547",
    appId: "1:142518717547:web:f0c04cf2e43a0984af752e"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


