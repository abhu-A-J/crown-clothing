import React from 'react';

/* Styling */
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = (props) => {
  const { children, ...otherProps } = props;

  return (
    <CustomButtonContainer {...otherProps}>
      {children.toUpperCase()}
    </CustomButtonContainer>
  );
};

export default CustomButton;
