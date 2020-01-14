import React ,{useState} from 'react';
import {Tab,Table,Button} from '@alifd/next';
import styles from './index.module.scss';


export default ({nodes}) => {
  const [data,setData]=useState([
    {
      id:1,
      title:"设置医疗机构申请书",
    },
    {
      id:2,
      title:"设置可行性研究报告",
    },
    {
      id:3,
      title:"选址报告和建筑设计平面图",
    },
    {
      id:4,
      title:"合作办医协议书",
    }
  ])

  const handleOnChange=(key)=>{
    console.log(key);
  }
  const handleRowSelection={
    onChange:handleOnChange,
    selectedRowKeys: nodes,
    getProps:(record)=>{
      return{
        disabled:record.id===nodes[0]||record.id===nodes[1]
      }
    },
  }
  return (<div className={styles.rgContent}>
                   <Button type="normal">基础材料</Button> &nbsp;&nbsp;
                   <Button type="secondary">基础表单</Button>
                   <Table dataSource={data} style={{marginTop:20}}
                    rowSelection={handleRowSelection}>
                    <Table.Column title="材料名称" dataIndex="title"/>
                    </Table> 
  </div>)

};
