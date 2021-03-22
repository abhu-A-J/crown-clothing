import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useQuery, gql } from '@apollo/client';

/* Styling */
import './collections-overview.styles.scss';

/* Components */
import CollectionPreview from '../collection-preview/collection-preview.component';
import Spinner from '../spinner/spinner.component';

/* Selectors */
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const GET_COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverview = () => {
  const { loading, error, data } = useQuery(GET_COLLECTIONS);

  if (error) {
    console.error('Error fetching collections', error);
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="collection-overview">
      {data.collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
