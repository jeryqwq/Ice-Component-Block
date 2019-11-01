import React from 'react';
import { shallow } from 'enzyme';
import ScienceStyle1 from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<ScienceStyle1 />);
  expect(wrapper.find('.ScienceStyle1').length).toBe(1);
});
