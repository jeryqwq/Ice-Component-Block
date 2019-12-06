import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number,array,object, boolean,color } from '@storybook/addon-knobs';
import TableShower from '../components/TableShower/src/index';
import usage from "../components/TableShower/demo/usage.md";
import demo3 from  "../components/TableShower/demo/demo3.md";
import demo2 from "../components/TableShower/demo/demo2.md";
import {genSetupMarkdown} from './util';
const stories = storiesOf('表格展示组件', module);
stories.addParameters({ component: TableShower });
stories.addDecorator(withKnobs);
stories.add("基础配置",()=>{
  const columns = [
    {
      title:'表头1',
      key:'key1',// key对应data需要展示的键值
      width:'35%',
    },
     {
      title:'表头2',
      key:'key2',// key对应data需要展示的键值
      width:'20%',
    },
     {
      title:'表头3',
      key:'key3',// key对应data需要展示的键值
      width:'20%',
    },
    {
      title:'表头4',
      key:'key4',// key对应data需要展示的键值
      width:'20%',
    },
  ];
  const genRow=function(idx){
    return{
      key1: `第${idx}行1文字有点长啊实打实的发是发撒肯定就爱上了觉得`,
      key2:  `第${idx}行2`,
      key4:  `第${idx}行4`,
      key3:`第${idx}行5`, 
    };
};
const data = (function(){
    const arr=[];
    for (let index = 0; index < 10; index++) {
      arr.push(genRow(index+1));
    }
    return arr;
  })();
  return  <TableShower  tableRows={number("表格行数",8)}
  animationSpacing={number("动画执行间隔",2000)}
  isBanner={boolean("是否开启滚动",true)}
  isLoop={boolean("是否循坏",true)}
  theadStyles={object("thead-td的JSX样式",{background:'#00baff',lineHeight:'50px',color:'white'})}
  tbodyStyles={object("tbody-td的JSX样式", {height: 45,color: 'white',fontSize: 12})}
  oddRowBackgroundColor={color("奇数行背景色",'#003b51')}
  evenRowBackgroundColor={color("偶数行背景",'#0a2732')}
  orderNumberStyles={object("自定义序列号JSX样式",{display: 'inline-block',width: 30,height: 30,lineHeight:"30px",background: '#00baff',borderRadius:'50%',color:'white'})}
  columns={array("表头数据源",columns)}
  data={array("表体数据源",data)}
  />;
},{
  notes:{
    "安装":genSetupMarkdown("TableShower"),
    "相关文档":usage,
  },
});
stories.add("自定义单元格样式",()=>{
  const columns = [
    {
      title:'表头1',
      key:'key1',// key对应data需要展示的键值
      width:'50%',
    },
     {
      title:'表头2',
      key:'key2',// key对应data需要展示的键值
      width:'20%',
    },
     {
      title:'表头3',
      key:'key3',// key对应data需要展示的键值
      width:'20%',
    },
    {
      title:'表头4',
      key:'key4',// key对应data需要展示的键值
      width:'20%',
    },
  ];
  const genRow=function(idx){
    return{
      key1: `第${idx}行1文字有点长啊实打实的发是发撒肯定就爱上了觉得`,
      key2:  `第${idx}行2`,
      key3: `第${idx}行3`,
      key4: `第${idx}行4`,
    };
};
const data = (function(){
    const arr=[];
    for (let index = 0; index < 10; index++) {
      arr.push(genRow(index+1));
    }
    return arr;
  })();
  return  <TableShower  tableRows={number("表格行数",8)}
  animationSpacing={number("动画执行间隔",2000)}
  isBanner={boolean("是否开启滚动",true)}
  isLoop={boolean("是否循坏",true)}
  theadStyles={object("thead-td的JSX样式",{background:'red',lineHeight:'50px',color:'white'})}
  tbodyStyles={object("tbody-td的JSX样式", {height: 45,color: 'yellow',fontSize: 12})}
  oddRowBackgroundColor={color("奇数行背景色",'#003b51')}
  evenRowBackgroundColor={color("偶数行背景",'#0a2732')}
  orderNumberStyles={object("自定义序列号JSX样式",{display: 'inline-block',width:25,height: 25,lineHeight:"25px",background: 'black',borderRadius:'0%',color:'white'})}
  columns={array("表头数据源",columns)}
  data={array("表体数据源",data)}
  />;
},{
  notes:{
    "安装":genSetupMarkdown("TableShower"),
    "相关文档":demo2,
  },
});

stories.add("单元格渲染函数",()=>{
  const columns = [
    {
      title:'表头1',
      key:'key1',// key对应data需要展示的键值
      width:'50%',
    },
     {
      title:'表头2',
      key:'key2',// key对应data需要展示的键值
      width:'20%',
    },
     {
      title:'表头3，自定义元素',
      key:'key3',// key对应data需要展示的键值
      width:'20%',
    },
  ];
  const genRow=function(idx){
    return{
      key1: `第${idx}行1文字有点长啊实打实的发是发撒肯定就爱上了觉得`,
      key2:  `第${idx}行2`,
      data4:  `第${idx}行4`,
      key3: (item)=>{
        return <span>{item.data1}自定义函数渲染<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20"></img><span style={{color:'yellow'}}>yellow</span></span>;
      },
    };
};
const data = (function(){
    const arr=[];
    for (let index = 0; index < 10; index++) {
      arr.push(genRow(index+1));
    }
    return arr;
  })();
  return  <TableShower  tableRows={number("表格行数",8)}
  animationSpacing={number("动画执行间隔",2000)}
  isBanner={boolean("是否开启滚动",true)}
  isLoop={boolean("是否循坏",true)}
  theadStyles={object("thead-td的JSX样式",{background:'#00baff',lineHeight:'50px',color:'white'})}
  tbodyStyles={object("tbody-td的JSX样式", {height: 45,color: 'white',fontSize: 12})}
  oddRowBackgroundColor={color("奇数行背景色",'#003b51')}
  evenRowBackgroundColor={color("偶数行背景",'#0a2732')}
  orderNumberStyles={object("自定义序列号JSX样式",{display: 'inline-block',width: 30,height: 30,lineHeight:"30px",background: '#00baff',borderRadius:'50%',color:'white'})}
  columns={array("表头数据源",columns)}
  data={array("表体数据源",data)}
  />;
},{
  notes:{
    "安装":genSetupMarkdown("TableShower"),
    "相关文档":demo3,
  },
});
