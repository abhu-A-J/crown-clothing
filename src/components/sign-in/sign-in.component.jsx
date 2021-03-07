import React, { useState } from 'react';

/* Styling */
import './sign-in.styles.scss';

/* Components */
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

/* Utils */
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = details;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setDetails({
        email: '',
        password: '',
      });
    } catch (err) {
      console.log('Error with sign in with email and password', err);
    }
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

          <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
