---
title: 样式和动画周期
order: 2
---
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
      count:23323323341,
    }
  }
  render() {
    return (
      <div>
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>改变参数</button>
         <h3> 红色，动画1500</h3>
        <NumberCard  number={this.state.count} animationTime={1500} styles={{color:'red'}} numberSpacing={5}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````