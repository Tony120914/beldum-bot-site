import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className='App bg-dark bg-gradient text-light'>
        <Router>
          <Header />
          <Body />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
