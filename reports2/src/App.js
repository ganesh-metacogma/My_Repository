import React, { Component } from 'react';
import './App.css';
import TrackerForm from './parts/eform';
import Etable from './parts/table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrackerForm />
        <Etable />
      </div>
    );
  }
}

export default App;
