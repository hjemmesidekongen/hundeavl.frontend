import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const HeaderNavigation = ({ links }) => {
  const content = () => {
    if (links && links.length > 0) {
      return (
        <div data-testid="navigation">
          <ul>
            {links.map(link => (
              <li key={link.path}>
                <Link href={link.path}>
                  <a data-testid="link">{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
