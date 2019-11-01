import React from 'react';
import { shallow } from 'enzyme';
import BorderStyle1 from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<BorderStyle1 />);
  expect(wrapper.find('.BorderStyle1').length).toBe(1);
});
