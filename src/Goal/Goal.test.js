import React from 'react';
import ReactDOM from 'react-dom';
import Goal from './Goal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Goal user={{id: 1, name: 'James', email: 'james@test.com', password: 'james123', goal_distance: 5, goal_pace: 480}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});