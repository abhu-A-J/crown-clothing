import { createSelector } from 'reselect';

/* Select user from state */
const selectUser = (state) => state.user;

/* Select currentUser from user state */
export const selectCurrentUser = createSelector(
  selectUser,
  (user) => user.currentUser
);
