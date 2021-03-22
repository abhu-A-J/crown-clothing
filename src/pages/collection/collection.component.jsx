import React from 'react';
import { useQuery, gql } from '@apollo/client';

/* Styling */
import './collection.styles.scss';

/* Child Componenst */
import CollectionItem from '../../components/collection-item/collection-item.component';
import Spinner from '../../components/spinner/spinner.component';

const GET_COLLECTIONS_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
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

const CollectionPage = ({ match }) => {
  const collectionID = match.params.collectionId;

  const { loading, error, data } = useQuery(GET_COLLECTIONS_BY_TITLE, {
    variables: {
      title: collectionID,
    },
  });

  if (error) {
    console.error('Error fetching the collection by title', error);
  }

  if (loading) {
    return <Spinner />;
  }

  const { title, items } = data.getCollectionsByTitle;

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

export default CollectionPage;
