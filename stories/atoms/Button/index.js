import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const Button = ({ onClick, isDisabled, isLoading, children }) => (
  <button className="button button--primary" onClick={onClick} disabled={isDisabled}>
    {children}

    {isLoading && <FontAwesomeIcon spin={true} icon={faCircleNotch} />}
  </button>
);

Button.defaultProps = {
  isDisabled: false,
  isLoading: false,
};

export default Button;
