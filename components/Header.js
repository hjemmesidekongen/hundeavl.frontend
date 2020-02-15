import React from 'react';

import HeaderNavigation from './HeaderNavigation';
import { primaryLinks } from '../globals/navigation';

const Header = () => (
  <header className="header">
    <div className="header__row header__row--top">
      <div className="container">Logo</div>
    </div>
    <div className="header__row header__row--bottom">
      <div className="container">
        <HeaderNavigation links={primaryLinks} />
      </div>
    </div>
  </header>
);

export default Header;
