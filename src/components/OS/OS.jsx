import React, { Component } from 'react';
import Wallpaper from './Wallpaper/Wallpaper';
import TaskBar from './TaskBar/TaskBar';
import Window from './Window/Window';
import './OS.scss';

class OS extends Component {
  render() {
    return (
      <div className="Windows">
        <Wallpaper></Wallpaper>
        {this.props.children}
        <TaskBar></TaskBar>
        <Window keyWindow={123}></Window>
      </div>
    );
  }
}

export default OS;
