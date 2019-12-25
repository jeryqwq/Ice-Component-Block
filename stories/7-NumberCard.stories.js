import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number,object,boolean,text } from '@storybook/addon-knobs';
import {genSetupMarkdown} from './util';
import NumberCard from '../components/NumberCard/src/index'
import usage from './../components/NumberCard/demo/usage.md';
const setUpDoc=genSetupMarkdown("NumberCard");//生成安装文档
const stories = storiesOf('数字翻牌效果', module);
stories.addDecorator(withKnobs);
stories.add('默认配置',()=>{
  return <NumberCard 
  number={number('显示的数字',657854)}
  animationTime={number("动画时间",2000)}
  numberSpacing={number("符号分隔的位数",3)}
  isonlyNumber={boolean("是否渲染纯数字",false)}
  spaceSymbol={text("分隔符",",")}
  styles={object("JSX样式",{
    color:'red'
  })}
  />
},{
  notes:{
    "安装":setUpDoc,
    "相关文档":usage
  }
})