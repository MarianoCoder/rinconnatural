import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyCqP9rSrwkGwVTt_FdsGC29eBf5QiqD_60",
  authDomain: "rincon-natural.firebaseapp.com",
  projectId: "rincon-natural",
  storageBucket: "rincon-natural.appspot.com",
  messagingSenderId: "282812683093",
  appId: "1:282812683093:web:df95ebc3b25a43a2eed5dc",
  measurementId: "G-C89H0361LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);