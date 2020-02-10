import React from 'react';

import FooterNavigation from './FooterNavigation';
import { secondaryLinks } from '../globals/navigation';

const Footer = () => (
  <div>
    <FooterNavigation links={secondaryLinks} />
  </div>
);

export default Footer;
