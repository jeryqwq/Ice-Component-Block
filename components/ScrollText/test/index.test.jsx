import React from 'react';
import { shallow } from 'enzyme';
import ScrollText from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<ScrollText />);
  expect(wrapper.find('.ScrollText').length).toBe(1);
});
