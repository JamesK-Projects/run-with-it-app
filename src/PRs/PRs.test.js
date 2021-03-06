import React from 'react';
import ReactDOM from 'react-dom';
import PRs from './PRs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <PRs 
    runData={[{id: 1, user_id: 1, distance: 4, date: '2021-03-13', time: 600, note: 'test'}]}
    match={{params: {user_id: 1}}}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});