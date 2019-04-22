import React, { Component } from 'react';
import './Window.scss';
import background from './background.png';
import StartButton from './StartButton/StartButton';
import TaskBarButton from './WindowButton/TaskBarButton';
import TaskBarClock from './WindowClock/TaskBarClock';


class Window extends Component {
  
  state = {
    
  }

  render() {
    return (
      <div className="Window" style={{
        backgroundImage: `url(${background})`
      }}>
        <StartButton></StartButton>
        <TaskBarButton></TaskBarButton>
        <TaskBarClock></TaskBarClock>
      </div>
    );
  }
}

export default Window;
