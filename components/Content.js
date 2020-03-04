import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ heading, children }) => (
  <main>
    {heading && heading !== '' && (
      <div className="page__heading" data-testid="page-heading">
        <div className="container">
          <h1>{heading}</h1>
        </div>
      </div>
    )}
    <div className="page__content">{children}</div>
  </main>
);

Content.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Content;
