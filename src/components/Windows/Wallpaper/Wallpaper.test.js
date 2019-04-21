import React from 'react';
import ReactDOM from 'react-dom';
import Wallpaper from './Wallpaper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wallpaper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
