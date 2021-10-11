import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <img src='favicon.png' alt='Bot header icon' />
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/commands'>Commands</Link>
            </li>
            <li>
              Invite Bot
            </li>
            <li>
              Source Code
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
