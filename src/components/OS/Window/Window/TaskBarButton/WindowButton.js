import React, { Component } from 'react';
import './WindowButton.scss';
import image_button from './button.png';

class TaskBarButton extends Component {
  
  state = {
    
  }

  render() {
    return (
      <div className="TaskBarButton" style={{
        backgroundImage: `url(${image_button})`
      }}>
      
      </div>
    );
  }
}

export default TaskBarButton;
