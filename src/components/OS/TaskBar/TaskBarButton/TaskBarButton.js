import React, { Component } from 'react';
import './TaskBarButton.scss';
import image_button from './button.png';
import icon from './messenger-icon.png';

class TaskBarButton extends Component {
  
  state = {
    label: "MSN Messenger (BETA)",
    icon
  }

  render() {
    let {label, icon} = this.state
    
    return (
      <div className="TaskBarButton" style={{
        backgroundImage: `url(${image_button})`
      }}>
        <img className="icon" src={icon} alt="Messenger icon"/>
        <span>
          {label}
        </span>
      </div>
    );
  }
}

export default TaskBarButton;
