import React, { Component } from 'react';
import Wallpaper from './Wallpaper/Wallpaper';
import TaskBar from './TaskBar/TaskBar';
import Window from './Window/Window';
import Dragula from 'react-dragula';
import { dragulaConstants } from '../../constants/dragula';
import './OS.scss';

class OS extends Component {

  dragulaDecorator = (componentBackingInstance) => {
    console.log(componentBackingInstance);
    
    if (componentBackingInstance) {
      const options = { ...dragulaConstants.window }
      const dragula = Dragula([componentBackingInstance], options)

      dragula.on('move', (element, target, source, sibling) => {
        
      })
    }
  }

  render() {
    return (
      <div className="Windows">
        <Wallpaper></Wallpaper>
        {this.props.children}
        <div className="WindowContainer" ref={this.dragulaDecorator}>
          <Window keyWindow={123}></Window>
        </div>
        <TaskBar></TaskBar>
      </div>
    );
  }
}

export default OS;
