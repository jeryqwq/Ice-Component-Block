import React from 'react';
import { shallow } from 'enzyme';
import BorderStyle2 from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<BorderStyle2 />);
  expect(wrapper.find('.BorderStyle2').length).toBe(1);
});
