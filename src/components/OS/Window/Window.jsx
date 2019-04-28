import React, { Component } from 'react';
import TitleBarWindow from './TitleBarWindow/TitleBarWindow';
import './Window.scss';


class Window extends Component {
  
  state = {
    keyWindow: null
  }

  constructor(props) {
    super(props)
    this.setState({
      keyWindow: props.keyWindow
    })
  }
  
  render() {
    
    let {keyWindow} = this.state
    
    return (
      <div className="Window" style={{
        overflow: 'hidden',
        width: '300px',
        height: '300px'
      }}>
        <TitleBarWindow>
          {keyWindow}
        </TitleBarWindow>      
      </div>
    );
  }
}

export default Window;
