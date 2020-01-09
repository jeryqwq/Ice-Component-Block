import React from 'react';
import styles from './index.module.scss';
export default function({width,height,iconName,onClick}){
  return (
      <svg width={width} height={height} onClick={onClick?()=>onClick():undefined}  className={styles.svgWrap}>
        <path className={styles[iconName]}></path>
      </svg>
  )
}
