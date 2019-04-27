import React from 'react';
import ReactDOM from 'react-dom';
import TitleBarWindow from './TitleBarWindow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TitleBarWindow />, div);
  ReactDOM.unmountComponentAtNode(div);
});
