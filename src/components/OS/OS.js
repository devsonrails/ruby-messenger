import React, { Component } from 'react';
import Wallpaper from './Wallpaper/Wallpaper';
import TaskBar from './TaskBar/TaskBar';
import './OS.scss';

class OS extends Component {
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

export default OS;