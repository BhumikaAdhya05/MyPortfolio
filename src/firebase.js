// Replace with your actual config from Firebase Console
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJz68IeeTrOUn6HpNattMTV7jAz8SRNWM",
  authDomain: "bhumikaportfolio-862e2.firebaseapp.com",
  projectId: "bhumikaportfolio-862e2",
  storageBucket: "bhumikaportfolio-862e2.firebasestorage.app",
  messagingSenderId: "528890597104",
  appId: "1:528890597104:web:af8486d03939db8ab57c35"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
