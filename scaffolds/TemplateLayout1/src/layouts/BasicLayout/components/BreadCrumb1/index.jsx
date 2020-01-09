import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function BreadCrumb1({ values }) {
  const breadArr=values.split('-');
  return (
    <div className={styles.BreadCrumb1}>
      <div className={styles.breadWrap}>
        {
          breadArr.map((item,idx)=>(
            <a key={idx} className={[`${styles.item}`,`${idx==breadArr.length-1&&styles.curItem}`].join(' ')}   >
            {item} 
            {
              idx!==breadArr.length-1&&<svg width="6" height="12" > <path className={styles.arrRg}></path> </svg>
            }
            </a>
          ))
        }
        <div className={styles.leftBtmArr}>
        </div>
      </div>
    </div>
  );
}

BreadCrumb1.propTypes = {
  values: PropTypes.string,
};

BreadCrumb1.defaultProps = {
  values: '标签管理-标签生成-新增方案',
};
