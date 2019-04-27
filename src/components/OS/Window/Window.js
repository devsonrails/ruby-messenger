import React, { Component } from 'react';
import './Window.scss';


class Window extends Component {
  
  state = {
    image: image
  }

  render() {
    return (
      <div className="Window" style={{
        overflow: 'hidden',
        width: '300px',
        height: '300px'
      }}>
      
      </div>
    );
  }
}

export default Window;
