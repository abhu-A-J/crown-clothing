import styled, { css } from 'styled-components';

/* Styles for main-button */
const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

/* Styles for inverted buttons */
const invertedButtonStyles = css`
  background: white;
  color: #000;
  border: 1px solid #000;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

/* Styles for google signin button */
const googleSignInStyles = css`
  background: #4285f4;
  color: #fff;
  &:hover {
    background: #357ae8;
    border: none;
  }
`;

/* Function to determine which styles with load based on prop passed */
export const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  if (props.inverted) {
    return invertedButtonStyles;
  }

  return buttonStyles
};


/* Butto Styled Component */
export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${props=>getButtonStyles(props)}
`;

