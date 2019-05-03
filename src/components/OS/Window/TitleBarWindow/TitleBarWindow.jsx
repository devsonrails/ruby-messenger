import React, { Component } from 'react';
import { TitleBarButton } from './TitleBarButton/TitleBarButton';
import './TitleBarWindow.scss';


class TitleBarWindow extends Component {

  render() {
    return (
      <div className="TitleBarWindow">
        <i className="icon"></i>
        <span className="title">
          {this.props.children}      
        </span>
        <div className="buttonContainer">
          <TitleBarButton label="teste"/>
        </div>
      </div>
    );
  }
}

export default TitleBarWindow;
