import React, { Component } from 'react';
import TitleBarWindow from './TitleBarWindow/TitleBarWindow';
import './Window.scss';


class Window extends Component {
  
  state = {
    keyWindow: 123
  }

  render() {
    let {keyWindow} = this.state
    
    return (
      <div className="Window" style={{
        overflow: 'hidden'
      }}>
        <TitleBarWindow>
          {keyWindow}
        </TitleBarWindow>
        <div className="WindowHeader">
          <div className="WindowHeaderContent">
          </div>
          <div className="bottomBorder">
          
          </div>
        </div>
        <div className="WindowBody">
        </div>      
      </div>
    );
  }
}

export default Window;
