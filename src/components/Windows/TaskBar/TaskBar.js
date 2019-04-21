import React, { Component } from 'react';
import './TaskBar.scss';
import background from './background.png';
import StartButton from './StartButton/StartButton';

class TaskBar extends Component {
  
  state = {
    
  }

  render() {
    return (
      <div className="TaskBar" style={{
        backgroundImage: `url(${background})`
      }}>
        <StartButton></StartButton>
      </div>
    );
  }
}

export default TaskBar;
