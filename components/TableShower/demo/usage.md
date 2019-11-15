---
title: Simple Usage
order: 1
---
## API 参数
| 参数名 | 说明 | 必填 | 类型 | 默认值 | 备注 |
| ------ | ---- | ---- | ---- | ------ | ---- |
|     tableRows   |    表格的行数  |   N   |   number   |   8     |      |
| isBanner  | 是否开启滑动 | N | bool | true |  |
| animationSpacing | 滑动动画每次执行的间隔 | N | number | 2000 | 单位毫秒 |
| isLoop | 是否开启无脑循坏 | N | bool | true | 为false时动画执行一次后停止 |
| theadStyles  | 头部的tr标签JSX样式  | N  | object | {background:'#00baff',lineHeight:'50px',color:'white'}  | 默认合并，冲突优先选择用户传入的 |
| tbodyStyles | body标签的JSX样式 | N  | object | {height:45,color:'white',fontSize:12 } | 默认合并样式，冲突优先选择用户传入的 |
| oddRowBackgroundColor | 奇数行的背景 | N | string  | '#003b51' | css颜色 |
| evenRowBackgroundColor | 偶数行的背景 | N | string  | '#0a2732' | css颜色 |
| orderNumberStyles | 自定义序列号样式 | N |  object | {display: 'inline-block',width: 30,height: 30,lineHeight:"30px",background: '#00baff',borderRadius:'50%',color:'white'} | 默认合并，冲突优先选择用户传入的 | 
| columns | 表头信息,widht:表格的宽度,key:表体对应的key值,title:表头名字 |  Y | array | [{title: '表头1',width: "20%",key: 'data1',}] |  |
| data | 表体内的数据  | Y | array | [{data1:'',data2:'',...},...]  | 数据需要与表头信息的key对应，否则找不到渲染对象 |

## 其他说明
### 支持自定义函数渲染，复杂样式（如换行或者多行文本,图片等）或其他业务逻辑请自行使用函数渲染单元格。
 * 具体用法与表格组件相似，data内的数据可使用函数渲染，默认传递当前列的数据对象，如：
```js
  let columns = [
    {
      title:'表头1',
      key:'key1',//key对应data需要展示的键值
      width:'50%'
    }
  ]
  let data = [
    {
      key1:(item)=>{
        console.log(item);
        return <span>JSX元素</span>
      }
    }
  ]
```

## 示例
````jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TableShower from 'table-shower';

class App extends Component {
  
  render() {
    let columns = [
    {
      title:'表头1',
      key:'key1',//key对应data需要展示的键值
      width:'50%'
    },
     {
      title:'表头2',
      key:'key2',//key对应data需要展示的键值
      width:'20%'
    },
     {
      title:'表头3，自定义元素',
      key:'key3',//key对应data需要展示的键值
      width:'20%'
    },
  ]
  const genRow=function(idx){
      return{
        key1: `第${idx}行1文字有点长啊实打实的发是发撒肯定就爱上了觉得`,
        key2:  `第${idx}行2`,
        data4:  `第${idx}行4`,
        key3: (item)=>{
          return <span>{item.data1}"自定义函数渲染"<span style={{color:'yellow'}}>yellow</span></span>
        },
      }
  }
  let data = (function(){
      let arr=[];
      for (let index = 0; index < 10; index++) {
        arr.push(genRow(index+1))
      }
      return arr;
    })();
    return (
      <div>
       <h3>默认状态</h3>
        <TableShower />
        <h3>四行 表头红色 自定义data和columns数据，表体绿色文字,奇数行绿色，偶数行白色,动画周期1000ms,序列号背景黑色   </h3>
        <TableShower tableRows={4}  columns={columns} data={data} theadStyles={{color:'red'}}  tbodyStyles={{color:'green'}} oddRowBackgroundColor='red'  evenRowBackgroundColor="white" animationSpacing={1000} orderNumberStyles={{background:'black'}}  />

      </div>
    );
  }
}

ReactDOM.render((
  <App />
), mountNode);
````
