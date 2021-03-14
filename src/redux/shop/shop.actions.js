import actionTypes from './shop.types';

/* Action to update collections */
export const updateCollections = (collectionsMap) => {
  return {
    type: actionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
