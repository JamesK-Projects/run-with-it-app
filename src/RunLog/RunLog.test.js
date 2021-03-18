import React from 'react';
import ReactDOM from 'react-dom';
import RunLog from './RunLog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RunLog match={{params: {user_id: 1}}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});