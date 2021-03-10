import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/* Reducers */
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export default rootReducer;
