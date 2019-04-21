import React, { Component } from 'react';
import './TaskBar.scss';
import background from './background.png';
import StartButton from './StartButton/StartButton';
import TaskBarButton from './TaskBarButton/TaskBarButton';
import TaskBarClock from './TaskBarClock/TaskBarClock';


class TaskBar extends Component {
  
  state = {
    
  }

  render() {
    return (
      <div className="TaskBar" style={{
        backgroundImage: `url(${background})`
      }}>
        <StartButton></StartButton>
        <TaskBarButton></TaskBarButton>
        <TaskBarClock></TaskBarClock>
      </div>
    );
  }
}

export default TaskBar;
