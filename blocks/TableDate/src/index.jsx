import React,{useState,useRef} from 'react';
import PropTypes from 'prop-types';
import { Button,Icon,Input,Table,Pagination  } from '@alifd/next';
import styles from './index.module.scss';

export default function TableDate({ value }) {
  const [loadding,setLoadding]=useState(true);
  setTimeout(() => {//解除动画
    setLoadding(()=>false);
  }, 1000);
  const dataSource = [//数据源
    {id: 1, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2017-09-10 12:10',status:0},
    {id: 2, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 3, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 4, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 5, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 6, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:1},
    {id: 7, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:1},
    {id: 8, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
  ];
  const filters=useRef([//数据过滤规则
    {
      label:"筛选条件1",
      value:'type1'
    },{
      label:"筛选条件2",
      value:'type2',
    },
    {
      label:"筛选条件3",
      value:'type3'
    },{
      label:"筛选条件4",
      value:'type4'
    },
  ]);
  const onFilter=(args)=>{//过滤后事件
    console.log("数据过滤触发事件，此处根据args过滤改变数据源",args);
  }
  const onSort=(args)=>{
    console.log('此处排序后更改数据源 ',args)
  }
  const onPageChange=(args)=>{
    console.log("pageChange",args);
  }
  const handlePageSizeChange=(size)=>{
    console.log("handlePageSizeChange:size=",size);
  }
  const renderAction=(value, index, record)=>{//有可能需要操作内部数据，放在内部
    return (
      <>
            <Button type="primary" text>修改</Button> &nbsp;&nbsp;
            <Button type="primary" text>禁用</Button> &nbsp;&nbsp;
            <Button type="primary" text>洞察</Button> &nbsp;&nbsp;
      </>
    )
  }
  return (
    <div className={styles.TableDate}>
      <Button type="primary"  ><Icon type="add" />新增洞察</Button>
      <Input placeholder="请输入数据源名称…" 
      style={{float:"right"}}
      innerAfter={<Icon type="search" size="xs" style={{margin: 4}}/>}
      aria-label="Medium" />
      <Table dataSource={dataSource}
      loading={loadding}
      onFilter={onFilter}
      onSort={onSort}
      style={{marginTop:10}}
      hasBorder={false}
      >
          <Table.Column title="序列" dataIndex="id"/>
          <Table.Column title="洞察主题" dataIndex="theme"/>
          <Table.Column title="简介" dataIndex="detail"/>
          <Table.Column title="更新用户" dataIndex="updateuser"/>
          <Table.Column title="更新时间" dataIndex="time" sortable/>
          <Table.Column title="状态" dataIndex="status" cell={renderStatus} filters={filters.current}/>
          <Table.Column title="操作" cell={renderAction} />
      </Table>
      <div className={styles.pageWrap}>
          <Pagination total={2514} onChange={onPageChange} size="medium"
          pageSizeSelector="dropdown" pageSizePosition="end"
          onPageSizeChange={handlePageSizeChange} 
          totalRender={total => <span className={styles.pageTotal}>{`共计: ${total}条`}</span>}/>
      </div>
    </div>
  );
}

const renderStatus =(value, index, record)=>{//仅展示
  if(value===0){
    return (
      <span className={styles.errStatus}>禁止</span>
    )
  }
  return(
    <span className={styles.successStatus}>启用</span>
  )
}
TableDate.propTypes = {
  value: PropTypes.string,
};

TableDate.defaultProps = {
  value: 'string data',
};
