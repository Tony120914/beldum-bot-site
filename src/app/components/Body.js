import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './body/Home';
import Commands from './body/Commands';

class Body extends React.Component {
  render() {
    return (
      <div className='Body' style={{paddingTop:'100px'}}>
        <Switch>
          <Route path='/commands'>
            <Commands />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
} export default Body;
