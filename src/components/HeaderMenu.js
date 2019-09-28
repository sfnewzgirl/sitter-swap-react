import {defaultButtons, headerButtons} from '../models/headerButtons';
import React from 'react';
import './HeaderMenu.css';

class HeaderMenu extends React.Component {
  render() {
    let loggedIn = true;
    let navigation = headerButtons.filter(button => button.loggedIn === loggedIn);
    navigation.unshift(defaultButtons[0]);
    
    return navigation.map(nav => {
      return (
        <li><a href={nav.path}>{nav.label}</a></li>
      );
    });
  }
}

export default HeaderMenu;