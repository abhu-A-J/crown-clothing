import actionTypes from './shop.types';


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


