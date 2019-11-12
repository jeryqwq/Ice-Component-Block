import React from 'react';
import { shallow } from 'enzyme';
import NumberCard from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<NumberCard />);
  expect(wrapper.find('.NumberCard').length).toBe(1);
});
