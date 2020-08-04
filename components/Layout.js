import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const Layout = ({ children }) => (
  <>
    <Meta />
    <div className="layout">
      <Header />

      <main className="layout__content">{children}</main>

      <Footer />
    </div>
  </>
);

export default Layout;
