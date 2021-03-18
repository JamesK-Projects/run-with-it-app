import React from 'react';
import ReactDOM from 'react-dom';
import DataPage from './DataPage';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><DataPage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});