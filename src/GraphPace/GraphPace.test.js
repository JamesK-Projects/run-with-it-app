import React from 'react';
import ReactDOM from 'react-dom';
import GraphPace from './GraphPace';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GraphPace />, div);
  ReactDOM.unmountComponentAtNode(div);
});