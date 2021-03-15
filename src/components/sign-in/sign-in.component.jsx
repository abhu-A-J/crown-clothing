import React, { useState } from 'react';
import { connect } from 'react-redux';

/* Styling */
import './sign-in.styles.scss';

/* Components */
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

/* Actions */
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = (props) => {
  const { googleSignInStart, emailSignInStart } = props;

  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = details;

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="email"
          value={details.email}
          handleChange={handleChange}
          label={'Email'}
        />

        <FormInput
          type="password"
          name="password"
          value={details.password}
          handleChange={handleChange}
          label={'Password'}
        />

        <div className="buttons">
          <CustomButton type="submit" onClick={handleSubmit}>
            Sign in
          </CustomButton>

          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password })),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
