import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <Meta />
    <div className="layout__wrapper">
      <Header />

      <div className="layout__content">{children}</div>

      <Footer />
    </div>
  </>
);

export default Layout;
