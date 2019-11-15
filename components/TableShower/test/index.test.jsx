import React from 'react';
import { shallow } from 'enzyme';
import TableShower from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<TableShower />);
  expect(wrapper.find('.TableShower').length).toBe(1);
});
