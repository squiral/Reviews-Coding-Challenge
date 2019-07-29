import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import sortByFrequency from './setupTests.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('can sort by frequency', () => {
  const array = [{text: "yes", value: 10}, {text: "no", value: 12}, {text: "hello", value: 32}]
  expect(sortByFrequency(array)).toEqual([{text: "hello", value: 32}, {text: "no", value: 12}, {text: "yes", value:10}])
})
