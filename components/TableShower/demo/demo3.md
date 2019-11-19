---
title: 自定义单元格
order: 3
---

## 说明
当需要自定义渲染元素时,对应的key值传递一个返回需要显示的组件或者节点函数，该函数默认回调一个当前项的对象。
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
      width:'35%'
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
     {
      title:'表头4',
      key:'key4',//key对应data需要展示的键值
      width:'15%'
    },
  ]
  const genRow=function(idx){
      return{
        key1: `第${idx}行1文字有点长啊实打实的发是发撒肯定就爱上了觉得`,
        key2:  `第${idx}行2`,
        key4:  (item)=><span>自定义渲染元素{item.key2}</span>,//函数自定义渲染
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
        <h3>自定义表体渲染，data传入函数 </h3>
        <TableShower tableRows={6}  columns={columns} data={data}   />
      </div>
    );
  }
}
ReactDOM.render((
  <App />
), mountNode);
````
