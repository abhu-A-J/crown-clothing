import firebase from 'firebase/app';

/* Auth */
import 'firebase/auth';

/* Database */
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpx2FebqkgHD0K6xin4LqKg4sd5U92Fsw',
  authDomain: 'crwn-clothing-e01af.firebaseapp.com',
  projectId: 'crwn-clothing-e01af',
  storageBucket: 'crwn-clothing-e01af.appspot.com',
  messagingSenderId: '1027756363743',
  appId: '1:1027756363743:web:dd48826827b802740ffe6a',
};

/* Initialize firebase */
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Google Sign in */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  // document reference on firbase
  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  // shapshot object when called .get(), .set() on ref objects
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error('Error Creating user',err);
    }
  }

  return userRef;
};

export default firebase;
