import React from 'react';

import HeaderNavigation from './HeaderNavigation';
import { primaryLinks } from '../globals/navigation';

const Header = () => (
  <div>
    <div>Logo</div>
    <div>
      <HeaderNavigation links={primaryLinks} />
    </div>
  </div>
);

export default Header;
