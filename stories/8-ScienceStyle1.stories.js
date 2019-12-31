import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs,color,number } from '@storybook/addon-knobs';
import {genSetupMarkdown} from './util';
import ScienceStyle1 from '../components/ScienceStyle1/src/index'
import usage from './../components/ScienceStyle1/demo/usage.md';
const setUpDoc=genSetupMarkdown("ScienceStyle1");//生成安装文档
const stories = storiesOf('科技风格旋转', module);
stories.addDecorator(withKnobs);
stories.add('默认配置',()=>{
  return <ScienceStyle1 
    lineColor={color('主题色',"red")}
    zoom={number("缩放比例：按照200px宽高",0.8)}
  />
},{
  notes:{
    "安装":setUpDoc,
    "相关文档":usage
  }
})