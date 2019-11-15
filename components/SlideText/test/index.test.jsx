import React from 'react';
import { shallow } from 'enzyme';
import SlideText from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<SlideText />);
  expect(wrapper.find('.SlideText').length).toBe(1);
});
