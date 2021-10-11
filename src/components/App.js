import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
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
