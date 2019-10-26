import HeaderMenu from './HeaderMenu';
import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="sitter-swap-header">
        <div className="sitter-swap-logo">
          <h1>SitterSwap</h1>
        </div>
        <div className="sitter-swap-header-menu">
          <HeaderMenu />
        </div>
      </div>
    )
  }
}

export default Header;
