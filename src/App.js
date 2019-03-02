import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <header>
      <NavBar />
      </header>
     </React.Fragment>
    );
  }
}
