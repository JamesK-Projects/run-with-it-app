import React from 'react';
import ReactDOM from 'react-dom';
import CreateAccountForm from './CreateAccountForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateAccountForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
