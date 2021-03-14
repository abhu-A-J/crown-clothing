import firebase from 'firebase/app';

/* Auth */
import 'firebase/auth';

/* Database */
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD0tSkQ8LlBTb2qrkCZY8TyUkYv65GiVww',
  authDomain: 'crown-clothing-836f8.firebaseapp.com',
  projectId: 'crown-clothing-836f8',
  storageBucket: 'crown-clothing-836f8.appspot.com',
  messagingSenderId: '406616007232',
  appId: '1:406616007232:web:66b4149fdef97c00b3f5a5',
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
      console.error('Error Creating user', err);
    }
  }

  return userRef;
};

export default firebase;
