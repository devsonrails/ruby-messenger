import React, { Component } from 'react';
import Wallpaper from './wallpaper/Wallpaper';
import './Windows.scss';

class Windows extends Component {
  render() {
    return (
      <div className="Windows">
        <Wallpaper>

        </Wallpaper>
        {this.props.children}
      </div>
    );
  }
}

export default Windows;
