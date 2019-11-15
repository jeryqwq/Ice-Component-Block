# 文字滚动

slide-text

文字滚动效果

## API参数

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|     text   |  文字滚动的内容    |    Y  |   string   |    "请输入您的文字滚动，越长越好！！！请输入您的文字滚动，越长越好！！！"    |   无   |
| animationTime | 动画执行周期 | N | number | 5000 | 从最开始到文字消失的时间,越大速度越慢 |
| isOnce | 是否仅执行一次 | N | boolean   | false | 执行一次后文字消失 |
| styles | 文字样式 | N | object |   styles:{fontWeight:'bold', fontSize:16} | 支持JSX样式 |
````jsx
import React, { Component, } from 'react';
import ReactDOM from 'react-dom';
import SlideText from 'slide-text';

class App extends Component {
  render() {
    return (
      <div>
        <SlideText />
        <SlideText  text="这是个速度挺快，3000ms的文字滚动，还是红色字体"  animationTime={3000} styles={{color:'red'}}/>

      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
