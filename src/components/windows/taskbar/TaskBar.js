import React, { Component } from 'react';
import './TaskBar.scss';
import background from './background.png';

class TaskBar extends Component {
  
  state = {
    
  }

  render() {
    return (
      <div className="TaskBar" style={{
        backgroundImage: `url(${background})`
      }}>
      
      </div>
    );
  }
}

export default TaskBar;
