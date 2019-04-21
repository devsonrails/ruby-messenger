import React, { Component } from 'react';
import './Wallpaper.scss';
import image from './wallpaper.jpg';

class Wallpaper extends Component {
  
  state = {
    image: image
  }

  render() {
    return (
      <div className="Wallpaper" style={{
        overflow: 'hidden',
        backgroundImage: `url(${this.state.image})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%'
      }}>
      
      </div>
    );
  }
}

export default Wallpaper;
