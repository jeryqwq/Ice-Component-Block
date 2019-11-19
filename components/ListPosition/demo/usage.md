---
title: 动态排名组件
order: 1
---
## API 参数

| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|    data    | 数据源     |  Y    |  array    |        |   每项对应对象格式{label:"",value:20}    |
| itemSize | 左右侧正方形边长，圆柱根据边长自适应 | N  | number | 20 | 根据实际大小调整 |
| valueStyle | 右侧value显示样式对象 | N | object | {}  | 请使用JSX格式 |
| labelStyle | 左侧label显示样式对象 | N | object | {}  | 请使用JSX格式 |
| formatLabel | label处理函数，可返回节点或者字符串 | N | func | null |  该函数回调当前item对象，请返回您处理后的结果 |
| formatValue | value处理函数，可返回节点或者字符串 | N | func | null |  该函数回调当前item对象，请返回您处理后的结果 |

## 说明
* data对象支持数据源配置，可传入圆柱体的边框色和圆柱体每个面的背景色，请传入background属性，否则默认随机颜色和随机边框色以及透明度。
* 每次value改变时data的label属性必须保证其唯一性，否则无法触发动画执行

````jsx
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
      borderStyle:'none'

    },
    {
      label: '2015年人均GDP',
      value: 80,
      borderStyle:'none'

    },
    {
      label: '2016年人均GDP',
      value: 170,
      borderStyle:'none'
    },
    {
      label: '2017年人均GDP',
      value: 80,
      borderStyle:'none'

    },
    {
      label: '2018年人均GDP',
      value: 200,
      borderStyle:'none'
    },
    {
      label: '2019年人均GDP',
      value: 95,
      borderStyle:'none'
    }
  ]
    }
  }
  componentDidMount(){
     let data=[]
      setInterval(()=>{
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
        <ListPosition  data={this.state.data} itemSize={20}/>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
