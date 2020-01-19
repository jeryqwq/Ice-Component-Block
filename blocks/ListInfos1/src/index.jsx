import React from 'react';
import PropTypes from 'prop-types';
import {Button,Icon,Input,Pagination } from '@alifd/next';
import styles from './index.module.scss';

export default function ListInfos1({ value }) {
  const onPageChange=(args)=>{
    console.log("pageChange",args);
  }
  const handlePageSizeChange=(size)=>{
    console.log("handlePageSizeChange:size=",size);
  }
  return (
    <div className={styles.ListInfos1}>
        <Button type="primary"  ><Icon type="add" />新增标签</Button>
        <Input placeholder="请输入数据源名称…" 
        style={{float:"right"}}
        innerAfter={<Icon type="search" size="xs" style={{margin: 4}}/>}
        aria-label="Medium" />
        <div className={styles.flexWrap}>
         {
           [1,2,3,4,5,6,7,8,9,0,1,2].map(()=> <div className={styles.item}>
            <div className={styles.title}>
              <Icon type="picture" style={{marginRight:10}}/>国土资源系统
            </div>
            <div className={styles.desc}>
              <span>对象总数：555</span> <span >任务数</span>
            </div>
            <div className={styles.btmBlock}>
              <span></span>
              <span>编辑</span>
            </div>
           </div>)
         }
        </div> 
        <div className={styles.pageWrap}>
          <Pagination total={2514} onChange={onPageChange} size="medium"
          pageSizeSelector="dropdown" pageSizePosition="end"
          onPageSizeChange={handlePageSizeChange} 
          totalRender={total => <span className={styles.pageTotal}>{`共计: ${total}条`}</span>}/>
      </div>
    </div>
  );
}

ListInfos1.propTypes = {
  value: PropTypes.string,
};

ListInfos1.defaultProps = {
  value: 'string data',
};
