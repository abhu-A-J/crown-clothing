import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

/* Styling */
import './shoppage.styles.scss';

/* Components */
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

/* Pages */
import CollectionPage from '../collection/collection.component';

/* Actions */
import { updateCollections } from '../../redux/shop/shop.actions';

/* Firebase Utils */
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

/* HOC's with spinner */

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch shop data from firestore */
  useEffect(() => {
    // get collection ref
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => {
          return (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          );
        }}
      />
      <Route
        exact
        path={`${match.path}/:collectionID`}
        render={(props) => {
          return <CollectionPageWithSpinner isLoading={isLoading} {...props} />;
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collections) =>
      dispatch(updateCollections(collections)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
