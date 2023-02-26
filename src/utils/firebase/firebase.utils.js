import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB2qFX0fQwqbKlvTFrVgkcMIneMrde1jl0',
  authDomain: 'crown-shop-db-d8e7c.firebaseapp.com',
  projectId: 'crown-shop-db-d8e7c',
  storageBucket: 'crown-shop-db-d8e7c.appspot.com',
  messagingSenderId: '741923540568',
  appId: '1:741923540568:web:355c399b2d5061fe46842d',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        createAt,
        displayName,
      });
    } catch (error) {
      console.error('error creaing the user', error.message);
    }
  }
  return userDocRef;
};
