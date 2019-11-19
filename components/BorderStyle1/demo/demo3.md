---
title: 自定义渲染节点或组件
order: 3
---
### 说明
自定义渲染title和内容，请传入一个函数，函数最终的返回结果为一个组件或者节点,节点没有设置className属性时默认添加闪烁动画,自定义节点无法确定动画结束时间，默认五秒动画。
### 例子
````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BorderStyle1 from 'border-style1';

class App extends Component {
  render() {
  const El=<div>这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点这是自定义节点</div>
    return (
      <div style={{background:'black'}}>
        <h2 style={{color:'white'}}>自定义函数渲染头部和内容区,以及边框颜色</h2>
        <BorderStyle1 title={()=>El}  content={()=>El} height={350} lineColor="yellow"/> 
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````