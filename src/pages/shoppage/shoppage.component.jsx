import React from 'react';
import { Route } from 'react-router-dom';

/* Styling */
import './shoppage.styles.scss';

/* Components */
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

/* Pages */
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionID`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
