import React from 'react';
import ReactDOM from 'react-dom';
import ProgressPage from './ProgressPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ProgressPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});