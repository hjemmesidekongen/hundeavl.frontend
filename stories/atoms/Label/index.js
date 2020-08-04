import React from 'react';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

const Label = ({ children, inputId, isRequired }) => (
  <label htmlFor={inputId}>
    {isRequired && <span className="required">*</span>}
    {children}
  </label>
);

Label.defaultProps = {
  isRequired: false,
};

export default Label;
