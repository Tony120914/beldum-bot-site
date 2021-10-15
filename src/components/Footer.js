import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='Footer p-5 bg-dark'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-3 my-2'>
              <KofiWidget/>
            </div>
            <div className='col-sm-8 my-2'></div>
            <div className='col-sm-1 my-2'>
              <TopButton/>
            </div>
          </div>
        </div>
      </div>
    );
  }
} export default Footer;

class KofiWidget extends React.Component {
  render() {
    return (
      <a href='https://ko-fi.com/E1E06BU7C' target='_blank' rel='noreferrer'><img src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' height='48' alt='Buy Me a Coffee at ko-fi.com' /></a>
    );
  }
}

class TopButton extends React.Component {
  render() {
    return (
      <a className="btn-sm" href="# " role="button">
        <i className="bi bi-arrow-up-circle fs-1 text-warning"></i>
      </a>
    );
  }
}
