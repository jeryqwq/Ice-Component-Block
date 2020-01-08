import React from 'react';
import NavLink from './components/AslideMenu/menuItem';
import AslideMenu from './components/AslideMenu';
import SvgIcon from '@/components/SvgIcon';
import { headerMenuConfig, asideMenuConfig } from '@/config/menu.js';
import styles from './index.module.scss';



export default function BasicLayout ({ children }) {//基础布局
  return (
    <div>    {/* Header */}
    <div className={styles.header}>
    <span className={styles.leftPart}>
    <div className={styles.logoInfo}>
        <SvgIcon width='16' height="16" iconName="logo"/>
        公安数据治理平台
    </div>
    <SvgIcon width='16' height="16" iconName="toggleLeftIcon"/>
    </span>
    
    
    {/* <Icon type="toggle-left"  size="small" onClick={()=>{
      AslideMenu.setIsIconOnly()
    }}/> */}
      {headerMenuConfig && headerMenuConfig.length > 0 ? (
            <div className={styles.headerWrap}>
            {
              headerMenuConfig.map((item, idx) => {
                return <NavLink key={idx} {...item} menuType="headerMenu"/>;
              })
            }
            </div>
      ) : null}
    </div>
    <div className={styles.container}>
      {/* Aside */}
      <div className={styles.aside}>
        {asideMenuConfig && asideMenuConfig.length > 0 ? (
             <AslideMenu  {...asideMenuConfig} />
        ) : null}
      </div>

      {/* Main */}
      <div className={styles.main}>
    
        {/* Content */}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
    </div>
  );
}



