---
title:数字翻牌器
order: 1
---
# 数字翻牌器
数字翻牌动画,展示数量。
number-card
## API参数
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|   number  |  动画执行后显示的数据    |    Y  |   stirng   |   "233,333"     |   传入字符串后间隔符号请用英文状态的逗号,隔开   |
| animationTime | 动画执行时间(ms) | N | number | 2000 | 翻牌器从开始到结束后动画时长 |
| styles | 自定义JSX样式渲染 | N | object | {color:'blue',fontSize:25,fontWeight:'bold'} | 请使用JSX的样式,传入的样式会与默认样式合并，冲突时优先使用用户传入的 |
| isonlyNumber | 是否渲染纯数字 |  N | boolean | false | 无任何样式和其他父标签 |
````jsx
import React, { Component,useState } from 'react';
import ReactDOM from 'react-dom';
import NumberCard from 'number-card';

class App extends Component {
  constructor(){
    super()
    this.state={
      count:"123,254,3",
    }
  }
  render() {
    return (
      <div>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>改变参数</button>
      <h3> 默认状态</h3>
        <NumberCard number={this.state.count}/>
         <h3> 红色，动画1500</h3>
        <NumberCard  number={this.state.count} animationTime={1500} styles={{color:'red'}}/>
         <h3>渲染纯数字</h3>
        <NumberCard isonlyNumber={true} number={this.state.count}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
