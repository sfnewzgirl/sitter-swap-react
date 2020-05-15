import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="sitter-swap-header">
        <Logo />
        <nav className="sitter-swap-header-menu">
          <HeaderMenu className="sitter-swap-header-menu" />
        </nav>
      </header>
    )
  }
}

export default Header;
