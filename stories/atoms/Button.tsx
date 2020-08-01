import React from 'react';

const Button = ({ text: string }) => {
  return (
    <button className="button button--primary">
      {text}
    </button>
  );
}

export default Button
