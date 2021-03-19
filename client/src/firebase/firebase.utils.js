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
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider);
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

/* Utility to send collectionItems to firebase */
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

/* Utility to convert snapshots to array maps */
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

/* Utility to check if we have have any current user */
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
