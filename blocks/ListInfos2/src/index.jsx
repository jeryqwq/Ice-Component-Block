import React from 'react';
import PropTypes from 'prop-types';
import {Button,Icon,Input,Pagination } from '@alifd/next';

import styles from './index.module.scss';

export default function ListInfos2({ value }) {
  return (
    <div className={styles.ListInfos2}>
      请选择一个业务库   <Input placeholder="请输入数据源名称…" 
        style={{float:"right"}}
        innerAfter={<Icon type="search" size="xs" style={{margin: 4}}/>}
        aria-label="Medium" />
    </div>
  );
}

ListInfos2.propTypes = {
  value: PropTypes.string,
};

ListInfos2.defaultProps = {
  value: 'string data',
};
