// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBXWrEI41J6fZEENN4AIOEDeDFru7nIBq0',
  authDomain: 'netflix-clone-90327.firebaseapp.com',
  projectId: 'netflix-clone-90327',
  storageBucket: 'netflix-clone-90327.appspot.com',
  messagingSenderId: '790259832546',
  appId: '1:790259832546:web:ae19129d8ec4e6990330bb',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
