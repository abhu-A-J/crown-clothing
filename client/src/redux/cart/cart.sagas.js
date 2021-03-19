import { all, call, takeLatest, put } from 'redux-saga/effects';

/* Action Types */
import actionTypes from '../user/user.types';

/* Actions */
import { clearCart } from './cart.actions';

/* Clear cart items */
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(actionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
