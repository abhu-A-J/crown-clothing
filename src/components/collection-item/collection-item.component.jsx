import React from 'react';

/* Styling */
import './collection-item.styles.scss';

/* Child Components */
import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = (props) => {
  const { name, price, imageUrl } = props;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
