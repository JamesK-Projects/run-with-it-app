import React from 'react';
import ReactDOM from 'react-dom';
import DataChart from './DataChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});