import React from 'react';
import ReactDOM from 'react-dom';
import GraphDistance from './GraphDistance';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GraphDistance />, div);
  ReactDOM.unmountComponentAtNode(div);
});