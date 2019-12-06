import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number,array,object,button } from '@storybook/addon-knobs';
import ListPosition from '../components/ListPosition/src/index';
import usage from '../components/ListPosition/demo/usage.md';
import dmeo2 from '../components/ListPosition/demo/demo2.md';
import demo3  from '../components/ListPosition/demo/demo4.md';
import {genSetupMarkdown} from './util';
const stories = storiesOf('动态排名组件', module);
stories.addDecorator(withKnobs);
stories.add('基础配置', () => {
  let data=[
    {
      label: '2012年人均GDP',
      value: 50,
      borderStyle: 'solid 1px rgba(0,0,0,0.2)',
    },
    {
      label: '2015年人均GDP',
      value: 80,
      borderStyle: 'solid 1px rgba(0,0,0,0.2)',
    },
    {
      label: '2017年人均GDP',
      value: 80,
      borderStyle: 'solid 1px rgba(0,0,0,0.2)',
    },
    {
      label: '2018年人均GDP',
      value: 100,
      borderStyle: 'solid 1px rgba(0,0,0,0.2)',
    },
    {
      label: '2019年人均GDP',
      value: 95,
      borderStyle: 'solid 1px rgba(0,0,0,0.2)',
    },
  ];
button("随机增加,触发动画",()=>{
  data[parseInt(Math.random()*5)].value+=20;
});
 return (<div style={{maxWidth:1200}}><ListPosition itemSize={number("圆柱两边方形的边长",20)} 
 valueStyle={object("右侧值JSX数字样式",{
   color:'red',
   fontSize:20,
 })}
 labelStyle={object("顶部labelJSX样式",{
  color:'red',
  fontSize:15,
})}
data={array("数据源配置",data)}
 /></div>);
},{
  notes:{
    "安装":genSetupMarkdown("ListPosition"),
    "相关文档":usage},
}).add("自定义单项样式",()=>{
  
  const data= [{
    label: '2012年人均GDP',
    value: 0,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
    background:'rgba(255,150,130,0.5)',
  },
  {
    label: '2015年人均GDP',
    value: 80,
    borderStyle:'solid 1px rgba(0,0,0,0.2)',
  },
  {
    label: '2016年人均GDP',
    value: 170,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
  },
  {
    label: '2017年人均GDP',
    value: 80,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
  },
  {
    label: '2018年人均GDP',
    value: 200,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
  },
  {
    label: '2019年人均GDP',
    value: 95,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
  },
];
button("随机增加,触发动画",()=>{
  data.forEach((item=>{
    item.value+=parseInt(Math.random()*20);
  }));
});
  return <div style={{maxWidth:1200}}><ListPosition  
  itemSize={number("圆柱两边方形的边长",30)} 
  valueStyle={object("右侧值JSX数字样式",{
    color:'red',
    fontSize:20,
  })}
  labelStyle={object("顶部labelJSX样式",{
    color:'red',
    fontSize:15,
  })}
  data={array("数据源配置",data)}
  /></div>;
},{
  notes:{ "安装":genSetupMarkdown("ListPosition"),
  "相关文档":dmeo2},
}).add("自定义渲染label和value",()=>{
 const  data= [{
    label: '2012年人均GDP',
    value: 0,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
    background:'rgba(255,150,130,0.5)',
  },
  {
    label: '2015年人均GDP',
    value: 80,
    borderStyle:'solid 1px rgba(0,0,0,0.2)',

  },
  {
    label: '2016年人均GDP',
    value: 170,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
  },
  {
    label: '2017年人均GDP',
    value: 80,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',

  },
  {
    label: '2018年人均GDP',
    value: 200,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
  },
  {
    label: '2019年人均GDP',
    value: 95,
    borderStyle:'solid 1px rgba(0,0,0,0.5)',
  },
];
button("随机增加,触发动画",()=>{
  data.forEach((item=>{
    item.value+=parseInt(Math.random()*20);
  }));
});
  return   <div style={{maxWidth:1200}}><ListPosition  itemSize={number("圆柱两边方形的边长",20)} 
  valueStyle={object("右侧值JSX数字样式",{
    color:'red',
    fontSize:20,
  })}
  labelStyle={object("顶部labelJSX样式",{
   color:'red',
   fontSize:15,
 })}
 data={array("数据源配置",data)}  
 formatLabel={(item)=><span>{`span标签内包的${item.label}`}</span>}  formatValue={(item)=>`${item.value}万`} /></div>;
},{
  notes:{
    "安装":genSetupMarkdown("ListPosition"),
    "相关文档":demo3,
  },
})