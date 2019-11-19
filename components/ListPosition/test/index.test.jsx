import React from 'react';
import { shallow } from 'enzyme';
import ListPosition from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<ListPosition />);
  expect(wrapper.find('.ListPosition').length).toBe(1);
});
