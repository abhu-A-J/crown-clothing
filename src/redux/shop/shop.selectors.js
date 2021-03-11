import { createSelector } from "reselect"


/* Select shop from sttate */
export const selectShop=(state=>state.shop)

/* Select Shop Items */
export const selectCollections=createSelector(
	selectShop,
	(shop)=>{
		return shop.collections	
	}
)