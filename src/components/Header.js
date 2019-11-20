import HeaderMenu from './HeaderMenu';
import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="sitter-swap-header">
        <div className="sitter-swap-logo">
          <h1>SitterSwap</h1>
        </div>
        <nav className="sitter-swap-header-menu">
          <HeaderMenu className="sitter-swap-header-menu" />
        </nav>
      </header>
    )
  }
}

export default Header;
