import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        {/* Nav Bar */}
        <nav className='navbar fixed-top navbar-expand-sm navbar-dark bg-dark'>
          <div className='container-fluid'>
            <Brand image='assets/374Beldum-Shiny.png' name='Beldum Bot'/>
            <NavbarToggler target='navbarNav'/>
            <NavbarNav id='navbarNav' navs={[
              <Link className='nav-link' to='/' key='home'>Home</Link>,
              <Link className='nav-link' to='/commands' key='commands'>Commands</Link>,
              <a className="btn btn-outline-warning" key='invite bot' tabIndex="-1" role="button" aria-disabled="true" target='_blank' rel='noreferrer' href='https://discord.com/api/oauth2/authorize?client_id=454764425090433034&permissions=19456&scope=bot%20applications.commands'>Invite Bot</a>,
              <a className="btn btn-outline-warning" key='source code' tabIndex="-1" role="button" aria-disabled="true" target='_blank' rel='noreferrer' href='https://github.com/Tony120914/Beldum-Bot'>Source Code</a>
            ]}/>
          </div>
        </nav>
      </div>
    );
  }
} export default Header;

class Brand extends React.Component {
  render() {
    return (
      <span className='navbar-brand user-select-none'>
        <img src={this.props.image} alt='Logo' width='40' height='40' className='.d-inline-block me-2 mb-2'></img>
        {this.props.name}
      </span>
    );
  }
}

class NavbarToggler extends React.Component {
  render() {
    return (
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target={`#${this.props.target}`} aria-controls={this.props.target} aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
    );
  }
}

class NavbarNav extends React.Component {
  render() {
    return (
      <div className='collapse navbar-collapse' id={this.props.id}>
        <div className='navbar-nav ms-auto gap-2 user-select-none'>
          {this.props.navs}
        </div>
      </div>
    );
  }
}
