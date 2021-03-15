import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* Styling */
import './shoppage.styles.scss';

/* Components */
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

/* Pages */
import CollectionPage from '../collection/collection.component';

/* Actions */
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

/* Selectors */
import { selectIsFetchingCollections } from '../../redux/shop/shop.selectors';

/* HOC's with spinner */
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = (props) => {
  const { match, fetchCollectionsStartAsync, isFetchingCollections } = props;
  /* Fetch shop data from firestore */
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => {
          return (
            <CollectionOverviewWithSpinner
              isLoading={isFetchingCollections}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path={`${match.path}/:collectionID`}
        render={(props) => {
          return (
            <CollectionPageWithSpinner
              isLoading={isFetchingCollections}
              {...props}
            />
          );
        }}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsFetchingCollections,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
