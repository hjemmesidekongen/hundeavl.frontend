import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ heading, children }) => (
  <>
    {heading && heading !== '' && (
      <div className="page-heading" data-testid="page-heading">
        <div className="container">
          <h1>{heading}</h1>
        </div>
      </div>
    )}
    <div>{children}</div>
  </>
);

Content.propTypes = {
  heading: PropTypes.string,
};

export default Content;
