import React, { Component } from 'react';
import './TaskBarClock.scss';
import background from './background.png';

class TaskBarClock extends Component {
  
  state = {
    
  }
  
  constructor(props){
    super(props);
    setInterval(() => {
      this.refreshClock();
    }, 1000); 
  }

  render() {
    return (
      <div className="TaskBarClock" style={{
        backgroundImage: `url(${background})`
      }}>
      <div className="arrow"></div>
      <span className="clock">{this.state.time}</span>
      </div>
    );
  }

  refreshClock = () => {
    let date = new Date();
    let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    this.setState({
       time  
    });
  }

}

export default TaskBarClock;
