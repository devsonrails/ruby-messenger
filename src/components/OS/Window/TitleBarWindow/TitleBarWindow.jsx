import React, { Component } from 'react';
import './TitleBarWindow.scss';


class TitleBarWindow extends Component {

  render() {
    return (
      <div className="TitleBarWindow">
        <i className="icon"></i>
        <span className="title">
          {this.props.children}      
        </span>
      </div>
    );
  }
}

export default TitleBarWindow;
