import React from 'react';

import Label from '../../atoms/Label';
import InputField from '../../atoms/InputField';

const Input = ({ label, value, placeholder, isRequired, isDisabled, inputId }) => (
  <div>
    <Label isRequired={isRequired} inputId={inputId}>{label}</Label>
    <InputField isRequired={isRequired} isDisabled={isDisabled} inputId={inputId} value={value} placeholder={placeholder} />
  </div >
);

Input.defaultProps = {
  label: '',
  isRequired: false,
  isDisabled: false,
  value: '',
  placeholder: '',
}

export default Input;
