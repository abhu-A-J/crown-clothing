import React from 'react';
import { connect } from 'react-redux';

/* Styling */
import './collection.styles.scss';

/* Child Componenst */
import CollectionItem from '../../components/collection-item/collection-item.component';

/* Selectors */
import { selectCollection } from '../../redux/shop/shop.selectors';


const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionID)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
