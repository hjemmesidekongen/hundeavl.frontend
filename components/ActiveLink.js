import React, { Children } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const className =
    pathname === props.href
      ? `${child.props.className} ${activeClassName}`
      : child.props.className;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
