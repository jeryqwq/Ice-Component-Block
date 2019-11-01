import React from 'react';
import { shallow } from 'enzyme';
import LogoShower from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<LogoShower />);
  expect(wrapper.find('.LogoShower').length).toBe(1);
});
