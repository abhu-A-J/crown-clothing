import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

/* Styling */
import './shoppage.styles.scss';

/* Components */
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

/* Pages */
import CollectionPage from '../collection/collection.component';

/* Firebase Utils */
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const ShopPage = ({ match }) => {
  /* Fetch shop data from firestore */
  useEffect(() => {
    // get collection ref
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapShot) => {
      convertCollectionsSnapshotToMap(snapShot);
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

export default ShopPage;
