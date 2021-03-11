import { createSelector } from 'reselect';

/* Select shop from sttate */
export const selectShop = (state) => state.shop;



/* Select Shop Items */
export const selectCollections = createSelector(selectShop, (shop) => {
  return shop.collections;
});

/* select collections for preview */
export const selectCollectionsForPreview=createSelector(
	selectCollections,
	(collections)=>{
		return Object.keys(collections).map((collectionKey)=>collections[collectionKey])
	}
)

/* Selector to select a collection */
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    selectCollections,
    (collections) => collections[collectionUrlParam]
  );
