import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Link from 'next/link';

const FooterNavigation = ({ links }) => {
  const content = () => {
    if (links.length > 0) {
      return (
        <ul className="vertical-navigation" data-testid="navigation">
          {links.map(link => (
            <li key={link.path}>
              <Link href={link.path}>
                <a data-testid="link">
                  <FontAwesomeIcon icon={faCaretRight} />

                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return <></>;
  };

  return <div data-testid="wrapper">{content()}</div>;
};

FooterNavigation.defaultProps = {
  links: [],
};

FooterNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default FooterNavigation;
