import React from 'react';
import ReactDOM from 'react-dom';
import DataRow from './DataRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataRow />, div);
  ReactDOM.unmountComponentAtNode(div);
});