import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ArrowRight } from '@material-ui/icons';

const FooterNavigation = ({ links }) => {
  const content = () => {
    if (links.length > 0) {
      return (
        <ul className="vertical-navigation" data-testid="navigation">
          {links.map(link => (
            <li key={link.path}>
              <Link href={link.path}>
                <a data-testid="link">
                  <ArrowRight />

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
