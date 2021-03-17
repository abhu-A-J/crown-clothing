import { takeLatest, call, put, all } from 'redux-saga/effects';

import actionTypes from './shop.types';

/* Actions */
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';

/* Firebase Utils */
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');

    // yield promise / API
    const snapShot = yield collectionRef.get();

    // call is the effect which calls a function
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));

    // dispatch actions
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

/* Saga Listenerss */
export function* fetchCollectionsStart() {
  yield takeLatest(actionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
