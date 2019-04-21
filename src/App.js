import React, { Component } from 'react';
import Windows from './components/windows/Windows';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Windows></Windows>
      </div>
    );
  }
}

export default App;
