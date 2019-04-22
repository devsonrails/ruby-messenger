import React from 'react';
import ReactDOM from 'react-dom';
import StartButton from './StartButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StartButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
