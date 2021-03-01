import React from 'react';

/* Styling */
import './sign-in-and-sign-up-page.styles.scss';

/* Components */
import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in">
      <SignIn />
    </div>
  );
};

export default SignInAndSignUpPage;
