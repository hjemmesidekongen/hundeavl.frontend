import React from 'react';
import PropTypes from 'prop-types';

import ActiveLink from './ActiveLink';

const HeaderNavigation = ({ links }) => {
  const content = () => {
    if (links.length > 0) {
      return (
        <nav data-testid="navigation">
          <ul className="header-navigation">
            {links.map(link => (
              <li key={link.path}>
                <ActiveLink activeClassName="active" href={link.path}>
                  <a data-testid="link">{link.title}</a>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </nav>
      );
    }

    return <></>;
  };

  return <div data-testid="wrapper">{content()}</div>;
};

HeaderNavigation.defaultProps = {
  links: [],
};

HeaderNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default HeaderNavigation;
