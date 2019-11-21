import React from 'react';
import { storiesOf } from '@storybook/react';
import TableShower from 'table-shower';
import {withLiveEditScope} from 'storybook-addon-react-live-edit';
import { withKnobs, number,array,object,button, boolean,color } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import usage from "../components/TableShower/demo/usage.md";

const stories = storiesOf('表格展示组件', module);
stories.addDecorator(withInfo); 
stories.addDecorator(withKnobs);
stories.addDecorator(withLiveEditScope({ React, TableShower }));
stories.add("基础配置",()=>{
  const columns = [
    {
      title:'表头1',
      key:'key1',// key对应data需要展示的键值
      width:'50%',
    },
     {
      title:'表头2',
      key:'key2',// key对应data需要展示的键值
      width:'20%',
    },
     {
      title:'表头3，自定义元素',
      key:'key3',// key对应data需要展示的键值
      width:'20%',
    },
  ];
  const genRow=function(idx){
    return{
      key1: `第${idx}行1文字有点长啊实打实的发是发撒肯定就爱上了觉得`,
      key2:  `第${idx}行2`,
      data4:  `第${idx}行4`,
      key3: (item)=>{
        return <span>{item.data1}"自定义函数渲染"<span style={{color:'yellow'}}>yellow</span></span>;
      },
    };
};
const data = (function(){
    const arr=[];
    for (let index = 0; index < 10; index++) {
      arr.push(genRow(index+1));
    }
    return arr;
  })();
  return  <TableShower  tableRows={number("表格行数",8)}
  animationSpacing={number("动画执行间隔",2000)}
  isLoop={boolean("是否循坏",true)}
  theadStyles={object("thead-td的JSX样式",{background:'#00baff',lineHeight:'50px',color:'white'})}
  tbodyStyles={object("tbody-td的JSX样式", {height: 45,color: 'white',fontSize: 12})}
  oddRowBackgroundColor={color("奇数行背景色",'#003b51')}
  evenRowBackgroundColor={color("偶数行背景",'#0a2732')}
  orderNumberStyles={object("自定义序列号JSX样式",{display: 'inline-block',width: 30,height: 30,lineHeight:"30px",background: '#00baff',borderRadius:'50%',color:'white'})}
  columns={array("表头数据源",columns)}
  data={array("表体数据源",data)}

  />;
},{
  notes:{
    markdown:usage,
  },
});
