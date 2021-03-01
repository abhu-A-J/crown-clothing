import React, { useState } from 'react';

/* Styling */
import './sign-in.styles.scss';

/* Components */
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = () => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      email: '',
      password: '',
    });
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

        <CustomButton type="submit" onClick={handleSubmit}>
          Sign in
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
