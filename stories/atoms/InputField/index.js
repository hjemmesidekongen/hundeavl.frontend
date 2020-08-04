import React from 'react';

const InputField = ({ value, type, placeholder, isDisabled, isRequired, inputId }) => (
  <input type={type} value={value} id={inputId} disabled={isDisabled} required={isRequired} placeholder={placeholder} className='form-input' />
)

InputField.defaultProps = {
  type: 'text',
  isDisabled: false,
  isRequired: false,
  placeholder: '',
  value: '',
};

export default InputField;
