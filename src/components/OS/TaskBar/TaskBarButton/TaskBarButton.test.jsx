import React from 'react';
import ReactDOM from 'react-dom';
import TaskBarButton from './TaskBarButton';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskBarButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
