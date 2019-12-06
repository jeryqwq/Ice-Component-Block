import React from 'react';
import { storiesOf } from '@storybook/react';
import {withLiveEditScope} from 'storybook-addon-react-live-edit';
import { withKnobs, number,array,object,button } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Demo组件', module);
stories.addDecorator(withInfo); 
stories.addDecorator(withKnobs);
export const withSubtitle = () => (123
  );