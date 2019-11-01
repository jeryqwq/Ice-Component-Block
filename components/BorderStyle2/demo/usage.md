---
title: 变色闪烁文本边框
order: 2
---

### 参数描述

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|     dur   |  颜色闪烁的频率    |  N    |   number   |   0.5(越大越慢)     |      |
| colors  | 颜色闪烁数组 | N | Array |  ['#4fd2dd','#235fa7','#4fd2dd'] | 颜色渐变过渡的所有色 |

### 说明
闪烁边框使用文字或图标的包裹，装饰元素直接放入children即可。

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BorderStyle2 from 'border-style2';

class App extends Component {
  render() {
    return (
      <div>
        <BorderStyle2 >
        <h1>阿大撒大撒要很多很多子</h1>
        <h1>阿大撒大撒要很多很多子</h1>
        <h1>阿大撒大撒要很多很多子</h1>
        <h1>阿大撒大撒要很多很多子</h1>
        <h1>阿大撒大撒要很多很多子</h1>
        </BorderStyle2>

        <BorderStyle2  colors={['red','green','blue','white']}>
        <h1 >四色渐变闪烁 红绿蓝白,默认速度</h1>
        <h1  >这里要很多内容</h1>
        </BorderStyle2>

        <BorderStyle2   dur={2}>
        <h1 >黑白渐变闪烁  慢速</h1>
        <h1 >黑白渐变闪烁  慢速</h1>
        <h1 >黑白渐变闪烁  慢速</h1>

        </BorderStyle2>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
