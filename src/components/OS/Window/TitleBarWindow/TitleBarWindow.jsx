import React, { Component } from 'react';
import './TitleBarWindow.scss';


class TitleBarWindow extends Component {

  render() {
    return (
      <div className="TitleBarWindow">
        {this.props.children}      
      </div>
    );
  }
}

export default TitleBarWindow;
