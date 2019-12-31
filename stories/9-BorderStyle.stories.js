import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs,array,number } from '@storybook/addon-knobs';
import {genSetupMarkdown} from './util';
import BorderStyle2 from '../components/BorderStyle2/src/index'
import usage from './../components/BorderStyle2/demo/usage.md';
const setUpDoc=genSetupMarkdown("BorderStyle2");//生成安装文档
const stories = storiesOf('边框闪烁样式', module);
stories.addDecorator(withKnobs);
stories.add('默认配置',()=>{
  return <div style={{height:500}}>
    <BorderStyle2 
    dur={number("闪烁频率",0.2)}
    colors={array("多颜色配置数组",['yellow','red','white'])}
  >
    这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容
  </BorderStyle2>
  </div>
},{
  notes:{
    "安装":setUpDoc,
    "相关文档":usage
  }
})