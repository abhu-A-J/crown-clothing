import React from 'react';

/* Styling */
import './homepage.styles.scss';

/* Child Components */
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
