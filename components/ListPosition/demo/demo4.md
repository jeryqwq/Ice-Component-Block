---
title: label和value文字format函数
order: 3
---

## 说明
  当label或者value的内容超出或者想自定义根据原来的值显示其他的属性时，可传入foramt处理函数,改函数回调当前项的值如：{name:'',value:''}

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
        <ListPosition  data={this.state.data}  formatLabel={(item)=><span>{item.label+".."}</span>}  formatValue={(item)=>item.value+".."} />
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);

````