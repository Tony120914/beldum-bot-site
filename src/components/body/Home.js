import React from 'react';
import { Link } from 'react-router-dom';
import { title } from '../../config.json';

class Home extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className='Home'>
        <div className='container'>
          <Welcome/>
          <hr className='mb-5'/>
          <ContentRow1/>
          <hr className='mb-5'/>
        </div>
      </div>
    );
  }
} export default Home;

class Welcome extends React.Component {
  render() {
    return (
      <div className='row align-items-center justify-content-evenly'>

        {/* Left col welcome message */}
        <div className='col-sm-5 text-center text-sm-start'>
          <h1 className='display-1 text-warning'>Beldum Bot</h1>
          <p className='lead'>
            <p>A random Discord bot that does random things.</p>
            <p>May add some other cool stuff in the future. ¯\_(ツ)_/¯</p>
          </p>
          <div className='d-grid d-sm-flex gap-2'>
            <a className="btn btn-lg btn-outline-warning" role="button" target='_blank' rel='noreferrer' href='https://discord.com/api/oauth2/authorize?client_id=454764425090433034&permissions=19456&scope=bot%20applications.commands'>Invite Bot</a>
            <Link className='btn btn-lg btn-warning' to='/commands'>See Commands</Link>
          </div>
        </div>

        {/* Right col beldum sprite */}
        <div className='col-sm-5 text-center'>
          <img src='assets/sprite.png' className='img-fluid' alt='Beldum sprite' width='75%'></img>
        </div>

      </div>
    );
  }
}

class ContentRow1 extends React.Component {
  render() {
    return (
      <div className='row align-items-center justify-content-evenly'>

        {/* Left col Top.gg widget */}
        <div className='col-sm-5 my-5 text-center'>
          <img src='https://top.gg/api/widget/454764425090433034.svg' className='img-fluid' alt='Top.gg widget'></img>
        </div>

        {/* Right col Discord.js message */}
        <div className='col-sm-5 text-center text-sm-start'>
          <h1 className='display-6 text-warning'>Discord.js</h1>
          <p className='lead'>
            <p>Built with the Discord.js library.</p>
          </p>
          <div className='d-grid d-sm-flex gap-2'>
            <a className="btn btn-lg btn-outline-primary" role="button" target='_blank' rel='noreferrer' href='https://discord.js.org/'>Discord.js</a>
          </div>
        </div>

      </div>
    );
  }
}
