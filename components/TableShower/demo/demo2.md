---
title: 自定义样式配置
order: 2
---
## 说明
theadStyles和tbodyStyles支持自定义表格其他样式并渲染到对应的td的行内样式上
## 示例
````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableShower from 'table-shower';

class App extends Component {
  
  render() {
    let columns = [
    {
      title:'表头1',
      key:'key1',//key对应data需要展示的键值
      width:'50%'
    },
     {
      title:'表头2',
      key:'key2',//key对应data需要展示的键值
      width:'20%'
    },
     {
      title:'表头3',
      key:'key3',//key对应data需要展示的键值
      width:'20%'
    },
  ]
  const genRow=function(idx){
      return{
        key1: `第${idx}行1文字有点长啊实打实的发是发撒肯定就爱上了觉得`,
        key2:  `第${idx}行2`,
        data4:  `第${idx}行4`,
        key3: `第${idx}行3`,
      }
  }
  let data = (function(){
      let arr=[];
      for (let index = 0; index < 10; index++) {
        arr.push(genRow(index+1))
      }
      return arr;
    })();
    return (
      <div>
        <h3>四行 表头红色 自定义data和columns数据，表体绿色文字,奇数行绿色，偶数行白色,动画周期1000ms,序列号背景黑色   </h3>
        <TableShower tableRows={4}  columns={columns} data={data} theadStyles={{color:'red',background:'gray'}}  tbodyStyles={{color:'green'}} oddRowBackgroundColor='red'  evenRowBackgroundColor="white" animationSpacing={1000} orderNumberStyles={{background:'black'}}  />
      </div>
    );
  }
}
ReactDOM.render((
  <App />
), mountNode);
````
