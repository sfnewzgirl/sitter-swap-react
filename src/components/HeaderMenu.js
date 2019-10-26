import {defaultButtons, headerButtons} from '../models/headerButtons';
import React from 'react';
import './HeaderMenu.css';

class HeaderMenu extends React.Component {
  render() {
    console.log('HeaderMenu props', this.props);
    // let loggedIn = this.props.loggedIn;
    let loggedIn = true;
    let navigation = headerButtons.filter(button => button.loggedIn === loggedIn);
    navigation.unshift(defaultButtons[0]);

    return navigation.map(nav => {
      return (
        <li key={nav.label}>
          <a href={nav.path}>{nav.label}</a>
        </li>
      );
    });
  }
}

export default HeaderMenu;
