import React from 'react';
import { title } from '../../config.json';

class Home extends React.Component {
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div className='Home'>
        <h1>Beldum Bot</h1>
        <p>
          A random Discord bot that does random things.
        </p>
        <p>
          May add some cool stuff in the future ¯\_(ツ)_/¯
        </p>
        <img src='374Beldum-Shiny.png' alt='Bot Avatar' width='25%' align='right'></img>
        <button>Invite to Discord</button>
        <button>See commands</button>
        
      </div>
    );
  }
}

export default Home;
