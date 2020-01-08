import React from 'react';
import styles from './index.module.scss';
export default function({width,height,iconName}){
  return (
      <svg width={width} height={height} >
        <path className={styles[iconName]}></path>
      </svg>
  )
}
