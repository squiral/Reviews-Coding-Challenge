import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsContainer from './container/ReviewsContainer.js'
import { shallow } from 'enzyme';
import './setupTests.js'
import App from './App';

it('App renders without crashing', () => {
  shallow(<App />);
});


it('can sort by word frequency', () => {
  const container = shallow(<ReviewsContainer />)
  const array = [{text: "yes", value: 10}, {text: "no", value: 12}]
  expect(sortByFrequency(array)).toEqual([{text: "no", value: 12}, {text: "yes", value:10}])
})