# 首屏加载组件

first-screen-loadding1

首屏动画

## API 参数
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|    lineColor    |   主题颜色   |   N   |   string   |   white      |  支持css颜色    |
|    isOnlyLoadding    |   是否仅展示前半部分loadding效果，不展示后期文字   |   N   |   boolean   |   false      |  动画要求较短时可只加载loadding动画    |


````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FirstScreenLoadding1 from 'first-screen-loadding1';

class App extends Component {
  render() {
    return (
      <div>
        <FirstScreenLoadding1 lineColor="red" isOnlyLoadding={false}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````