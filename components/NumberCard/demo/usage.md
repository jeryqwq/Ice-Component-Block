---
title: 数字翻牌器
order: 1
---
# 数字翻牌器

数字翻牌动画,展示数量。
number-card

## API参数

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|   number  |  动画执行后显示的数据    |    Y  |   number   |   233333     |   传入你的整型数字   |
| numberSpacing | 逗号分隔的位数 | Y | number | 3 | 整型数字间隔的位数 |
| spaceSymbol | 自定义分隔符 |  N | stirng | ',' | 数字之间的间隔符号，常用,-.等 |
| animationTime | 动画执行时间(ms) | N | number | 2000 | 翻牌器从开始到结束后动画时长 |
| styles | 自定义JSX样式渲染 | N | object | {color:'blue',fontSize:25,fontWeight:'bold'} | 请使用JSX的样式,传入的样式会与默认样式合并，冲突时优先使用用户传入的 |
| isonlyNumber | 是否渲染纯数字 |  N | boolean | false | 无任何样式和其他父标签 |

## 说明

number字段请传入整型数字，并传入间隔的位数

## 默认状态

````jsx
import React, { Component,useState } from 'react';
import ReactDOM from 'react-dom';
import NumberCard from 'number-card';

class App extends Component {
  constructor(){
    super()
    this.state={
      count:2332332334,
    }
  }
  render() {
    return (
      <div>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>改变参数</button>
      <h3> 默认状态</h3>
        <NumberCard number={this.state.count}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
