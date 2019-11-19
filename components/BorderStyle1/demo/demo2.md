---
title: 自定义文字和头部以及边框色
order: 2
---
### 例子
````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BorderStyle1 from 'border-style1';

class App extends Component {
  render() {
    return (
      <div style={{background:'black'}}>
        <h2 style={{color:'white'}}>头部和内容字符串,以及边框颜色</h2>
        <BorderStyle1 title="这是头部自定义内容"  content="这是自定义内容文字123123啊大苏打撒旦这是自定义内容文字123123啊大苏打撒旦" height={250} lineColor="yellow"/> 
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````