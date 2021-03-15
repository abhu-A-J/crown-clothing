import actionTypes from './shop.types';

/* Firebase Utils */
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

/* Action to update isFetching State */
export const fetchCollectionsStart = () => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_START,
  };
};

/* Action to set success */
export const fetchCollectionsSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload,
  };
};

/* Action to set failure */
export const fetchCollectionsFailure = (payload) => {
  return {
    type: actionTypes.FETCH_COLLECTIONS_FAILURE,
    payload,
  };
};

/* Action to fetch collections */
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => {
        dispatch(fetchCollectionsFailure(err.message));
      });
  };
};
