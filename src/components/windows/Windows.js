import React, { Component } from 'react';
import Wallpaper from './wallpaper/Wallpaper';
import TaskBar from './taskbar/TaskBar';
import './Windows.scss';

class Windows extends Component {
  render() {
    return (
      <div className="Windows">
        <Wallpaper></Wallpaper>
        {this.props.children}
        <TaskBar></TaskBar>
      </div>
    );
  }
}

export default Windows;
