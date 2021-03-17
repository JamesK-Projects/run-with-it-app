import React from 'react';
import ReactDOM from 'react-dom';
import PRs from './PRs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PRs />, div);
  ReactDOM.unmountComponentAtNode(div);
});