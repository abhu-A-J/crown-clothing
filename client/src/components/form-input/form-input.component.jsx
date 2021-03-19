import React from 'react';

/* Styling */
import './form-input-styles.scss';

const FormInput = (props) => {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div className="group">
      <input onChange={handleChange} {...otherProps} className="form-input" />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
