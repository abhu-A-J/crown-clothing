import React from 'react';

/* Styling */
import './with-spinner.styles.scss';

const WithSpinner = (WrappedComponent) => {
  return (props) => {
    const { isLoading, ...otherProps } = props;
    return (
      <>
        {isLoading ? (
          <div className="spinner-overlay">
            <div className="spinner-container"></div>
          </div>
        ) : (
          <WrappedComponent {...otherProps} />
        )}
      </>
    );
  };
};

export default WithSpinner;
