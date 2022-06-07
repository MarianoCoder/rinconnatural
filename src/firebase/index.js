import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqP9rSrwkGwVTt_FdsGC29eBf5QiqD_60",
  authDomain: "rincon-natural.firebaseapp.com",
  projectId: "rincon-natural",
  storageBucket: "rincon-natural.appspot.com",
  messagingSenderId: "282812683093",
  appId: "1:282812683093:web:df95ebc3b25a43a2eed5dc",
  measurementId: "G-C89H0361LN"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => app;

//Servicios
export const getFirestore = () => firebase.firestore(app);
