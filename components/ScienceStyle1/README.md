# 酷炫科技风旋转，爱的魔力转圈圈。。。。

science-style1

大屏科技风格旋转动画

## 说明
大屏科技风装饰
## API 
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|     zoom   |   元素的缩放比例   |   N   |  number    |    1    |      |
|     lineColor   |   渲染的颜色，css支持的颜色格式都可以   |   N   |  string    |    '#88d33f'    |      |


````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScienceStyle1 from 'science-style1';

class App extends Component {
  render() {
    return (
      <div>
      默认状态：  <ScienceStyle1 />
      1.2倍大小红色：  <ScienceStyle1 zoom={1.2} lineColor='red'/>
      0.8倍大小蓝色：  <ScienceStyle1 zoom={0.8} lineColor='blue'/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
