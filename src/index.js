import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {resolvers,typeDefs} from './graphql/resolvers'

import './index.scss';
import App from './App';

/* Store */
import store, { persistor } from './redux/store';

/* Apollo Client config */

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com',
  cache: new InMemoryCache(),
  resolvers,
  typeDefs
});

client.writeData({
  data: {
    cartHidden: true,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
