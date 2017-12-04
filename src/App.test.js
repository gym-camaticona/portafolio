import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
