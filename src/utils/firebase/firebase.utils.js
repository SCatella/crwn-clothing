import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmnrRHyUudW6Y6dQHTaSYkwwWmI9wFC80",
  authDomain: "crwn-clothing-db-87822.firebaseapp.com",
  projectId: "crwn-clothing-db-87822",
  storageBucket: "crwn-clothing-db-87822.appspot.com",
  messagingSenderId: "1054546518589",
  appId: "1:1054546518589:web:63428ff38b1bf990270054"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
