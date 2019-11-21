---
title: 自定义颜色和大小
order: 2
---

## 说明
* 为每个柱状设置对应的背景色和边框样式，再data数据源的对应项下添加borderStyle和background属性即可。
* itemSize为30，即左右侧正方形的边长为30，柱子自适应其大小


```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListPosition from 'list-position';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
     data: [{
      label: '2012年人均GDP',
      value: 0,
      borderStyle:'solid 1px rgba(0,0,0,0.5)',
      background:'rgba(255,150,130,0.5)'
    },
    {
      label: '2015年人均GDP',
      value: 80,
      borderStyle:'solid 1px rgba(0,0,0,0.2)',

    },
    {
      label: '2016年人均GDP',
      value: 170,
      borderStyle:'solid 1px rgba(0,0,0,0.5)',
    },
    {
      label: '2017年人均GDP',
      value: 80,
      borderStyle:'solid 1px rgba(0,0,0,0.5)',

    },
    {
      label: '2018年人均GDP',
      value: 200,
      borderStyle:'solid 1px rgba(0,0,0,0.5)',
    },
    {
      label: '2019年人均GDP',
      value: 95,
      borderStyle:'solid 1px rgba(0,0,0,0.5)',
    }
  ]
    }
  }
  componentDidMount(){
     let data=[]
      setInterval(()=>{//设置增加动画
      this.state.data.forEach((item,idx)=>{
        const val=parseInt(Math.random()*5);
        item.value+=val
        // val%2===0?item.value+=val:item.value-=val;
        data[idx]=item
      })
       this.setState({
        data:data 
      })
      },200)
  }
  render() {
    return (
      <div>
        <ListPosition  data={this.state.data} itemSize={30}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
```