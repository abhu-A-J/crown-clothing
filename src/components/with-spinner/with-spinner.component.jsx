import React from 'react';

/* Components */
import Spinner from '../spinner/spinner.component';

const WithSpinner = (WrappedComponent) => {
  return (props) => {
    const { isLoading, ...otherProps } = props;
    return (
      <>{isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />}</>
    );
  };
};

export default WithSpinner;
