import React from 'react';

/* Styling */
import './shoppage.styles.scss';

/* Data */
import SHOP_DATA from './data';

/* Components */
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;
