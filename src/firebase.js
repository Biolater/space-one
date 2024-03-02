// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { collection, doc, getFirestore, setDoc } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAhhs2Iz-wF20KBmF27U41kHmJaM9VO2h0",
  authDomain: "space-one-15043.firebaseapp.com",
  projectId: "space-one-15043",
  storageBucket: "space-one-15043.appspot.com",
  messagingSenderId: "954894580582",
  appId: "1:954894580582:web:317a27f04adf6bd76766a7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const colRef = collection(db, 'users');
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
