import React, { Component } from 'react';
import './TaskBarButton.scss';
import image_button from './button.png';

class TaskBarButton extends Component {
  
  state = {
    label: "MSN Messenger (BETA)",
    icon: "",
    window: 1234 
  }

  render() {
    let {label, icon, window} = this.state
    
    return (
      <div className="TaskBarButton" style={{
        backgroundImage: `url(${image_button})`
      }}>
        <span>
          <i className={icon}></i>{{label}}
        </span>
      </div>
    );
  }
}

export default TaskBarButton;
