import React from 'react';
import { shallow } from 'enzyme';
import FirstScreenLoadding1 from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<FirstScreenLoadding1 />);
  expect(wrapper.find('.FirstScreenLoadding1').length).toBe(1);
});
