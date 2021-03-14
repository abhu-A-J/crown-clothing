import React from 'react';

/* Styling */
import { HomePageContainer } from './homepage.styles';

/* Child Components */
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
