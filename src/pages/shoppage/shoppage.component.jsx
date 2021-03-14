import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

/* Styling */
import './shoppage.styles.scss';

/* Components */
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

/* Pages */
import CollectionPage from '../collection/collection.component';

/* Actions */
import { updateCollections } from '../../redux/shop/shop.actions';

/* Firebase Utils */
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const ShopPage = ({ match, updateCollections }) => {
  /* Fetch shop data from firestore */
  useEffect(() => {
    // get collection ref
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollections(collectionsMap);
    });
  }, []);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionID`}
        component={CollectionPage}
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
