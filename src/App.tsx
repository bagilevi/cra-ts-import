import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import _ from 'lodash';
/*const _ = require('lodash')*/
const foo = _.join(['f', 'oo']);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{foo}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
