import React, { Component } from 'react';
import './StartButton.scss';
import start_button from './start_button.png';

class StartButton extends Component {
  
  state = {
    
  }

  render() {
    return (
      <div className="StartButton" style={{
        backgroundImage: `url(${start_button})`
      }}>
      
      </div>
    );
  }
}

export default StartButton;
