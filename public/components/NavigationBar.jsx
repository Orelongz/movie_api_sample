import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {

  render() {
    return (
      <header>
        <nav className='navbar'>
          <div className='brand'><Link to='/'>Homepage</Link></div>
          <ul>
            <li><Link to='/search'>Search Movies</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavigationBar;
