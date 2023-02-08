import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCHJ6ad89419gvV7LrgLDYPA_GqcAxRZ08",
  authDomain: "projeto75-517af.firebaseapp.com",
  projectId: "projeto75-517af",
  storageBucket: "projeto75-517af.appspot.com",
  messagingSenderId: "240539055306",
  appId: "1:240539055306:web:3ba65613d9987862c83033"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
