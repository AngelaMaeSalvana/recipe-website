// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth ,GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAuaFj2WOoN9g-7eMe16tpAbUG71lhxDx4",
    authDomain: "recipe-website-eba83.firebaseapp.com",
    projectId: "recipe-website-eba83",
    storageBucket: "recipe-website-eba83.appspot.com",
    messagingSenderId: "128419239881",
    appId: "1:128419239881:web:b9e8650e9519ba20bbfa18",
    measurementId: "G-8X9VR36MQR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Firestore
const db = getFirestore(app);



export { db, auth, provider }; // Export both db and auth