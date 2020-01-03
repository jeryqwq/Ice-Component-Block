---
title: 大屏展示边框
order: 1
---

**边框组件用于展示一些内容渲染和文字时的特效，可内嵌图表或者文字等元素。**

### 参数描述

| 参数 | 描述 | 类型 | 默认值 | 其他|
| :------| ------: | :------: |:------: |:------: |
| title |  头部展示内容，支持自定义函数渲染和字符串文字，字符串参数自动添加动画，自定义元素渲染时如外层包裹的元素没有给定类名也会自动添加类名渲染  | string/func | ACCESS POINT标题很长123 | 自定义渲染函数请返回你的DOM内容 |
| content | 内容区域内容，渲染方式同头部 |  string/func  | 是内容问字这是内容问字这5... |  同头部 |
| height  | 边框整体高度，必传属性，根据高度渲染具体的元素边框 | number | 500 | 可根据具体的需要和效果做调整 |
| lineColor | 整体边框颜色，支持rgb和字符串颜色以及rgba模式 |  string | white | 目前仅支持一种 |

### 说明

头部和内容最好传递字符串，字符串支持打字和动态闪烁效果，当然传递其他元素如果最外层的div没有给定类名，也会默认添加五秒的内容闪烁效果后动画降级


### 例子
````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BorderStyle1 from 'border-style1';

class App extends Component {
  render() {
    return (
      <div style={{background:'black'}}>
        <h2 style={{color:'white'}}>默认状态</h2>
        <BorderStyle1 /> 
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````


