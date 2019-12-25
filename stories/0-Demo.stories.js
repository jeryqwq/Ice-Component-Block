import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number,color,boolean } from '@storybook/addon-knobs';
import {genSetupMarkdown} from './util';
import FirstScreenLoadding1 from '../components/FirstScreenLoadding1/src/index'
import usage from './../components/FirstScreenLoadding1/demo/usage.md';
const componentName="FirstScreenLoadding1";
const stories = storiesOf('首屏加载动画', module);
stories.addDecorator(withKnobs);
