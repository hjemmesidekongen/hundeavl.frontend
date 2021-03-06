import '../styles/stylesheet.css';
import 'react-tippy/dist/tippy.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';

import Layout from '../components/Layout';

config.autoAddCss = false;

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
