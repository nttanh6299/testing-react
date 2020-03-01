import React from 'react';
import './styles.scss';

const Header = props => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">LOGO</div>
      </div>
    </header>
  );
};

export default Header;
