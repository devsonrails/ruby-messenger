import React from 'react';
import ReactDOM from 'react-dom';
import TaskBarClock from './WindowClock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskBarClock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
