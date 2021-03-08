import React from 'react';
import { connect } from 'react-redux';

/* Styling */
import './collection-item.styles.scss';

/* Child Components */
import CustomButton from '../custom-button/custom-button.component';

/* Actions */
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = (props) => {
  const { item, addItem } = props;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
