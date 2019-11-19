---
title: 渲染纯数字
order: 3
---

## 说明
hooks内部可直接作为使用函数使用，类组件中不能将hooks函数直接当作函数放入
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
         <h3>渲染纯数字</h3>
          <div style={{color:'red',background:'yellow'}}>
            <NumberCard isonlyNumber={true} number={this.state.count}/>
          </div>
        </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````