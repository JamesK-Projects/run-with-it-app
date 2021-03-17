import React from 'react';
import ReactDOM from 'react-dom';
import ProgressPage from './ProgressPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});