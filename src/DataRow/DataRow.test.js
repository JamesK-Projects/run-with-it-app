import React from 'react';
import ReactDOM from 'react-dom';
import DataRow from './DataRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataRow run={{id: 1, user_id: 1, distance: 4, date: '2021-03-13', time: 600, note: 'test'}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});