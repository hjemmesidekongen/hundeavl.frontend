import React from 'react';

import FooterNavigation from './FooterNavigation';
import { secondaryLinks } from '../globals/navigation';

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="container">
        <FooterNavigation links={secondaryLinks} />
      </div>
    </div>
  </footer>
);

export default Footer;
