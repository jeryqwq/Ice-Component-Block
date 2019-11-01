---
title: LOGO 展示
order: 1
---



## 说明
常用于LOGO展示，请传入children属性，可放入图片或者文字等信息,LOGO宽度为总宽度的30%,其他细节请自行调整子元素样式。


## API参数

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ---: | ---- | ---- | ---- | ------ | ---- |
|    lineColor    |  轨道颜色   |    N  |   string   |  'rgba(255,255,255,0.2)'     |    为了突出视觉效果最好使用rgba模式的颜色且最好透明度设置较低  |
|  width  |  外层容器的宽高 | N | number | 200 | 宽高比都是一比一 |

````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LogoShower from 'logo-shower';

class App extends Component {
  render() {
    return (
      <div style={{background:'black'}}>
        <LogoShower />


        <LogoShower  lineColor="rgba(0,255,0,0.2)" width={100} >
        <div style={{width:50,height:50,borderRadius:'50%'}}></div>
        </LogoShower>


        <LogoShower width={300}  lineColor="rgba(0,0,255,0.5)"/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
