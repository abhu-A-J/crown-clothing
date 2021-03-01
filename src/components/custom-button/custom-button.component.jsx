import React from 'react';

/* Styling */
import './custom-button.styles.scss';

const CustomButton = (props) => {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default CustomButton;
