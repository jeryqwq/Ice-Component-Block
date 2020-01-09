import React, { useLayoutEffect, useState } from "react"
import NavLink from "./components/AslideMenu/menuItem"
import AslideMenu from "./components/AslideMenu"
import SvgIcon from "@/components/SvgIcon"
import { headerMenuConfig, asideMenuConfig } from "@/config/menu.js"
import styles from "./index.module.scss"

function debounce(fn, wait) {
  //简单函数防抖，避免菜单闪屏
  var timeout = null
  return function() {
    !timeout && clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}
export default function BasicLayout({ children }) {
  //基础布局
  const [isIconOnly, setIsIconOnly] = useState(false)
  useLayoutEffect(() => {
    //渲染仅执行一次
    let layoutDebounce = debounce(() => {
      setIsIconOnly(window.innerWidth < 1366)
    }, 200)
    window.addEventListener("resize", () => {
      layoutDebounce()
    })
  }, [])
  return (
    <div>
      {" "}
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.leftPart}>
          <div className={styles.logoInfo}>
            <SvgIcon width="16" height="16" iconName="logo" />
            LOGO 公安数据治理平台
          </div>
          <SvgIcon
            width="16"
            height="16"
            onClick={() => {
              setIsIconOnly(!isIconOnly)
            }}
            iconName="toggleLeftIcon"
          />
        </span>
        {headerMenuConfig && headerMenuConfig.length > 0 ? (
          <div className={styles.headerWrap}>
            {headerMenuConfig.map((item, idx) => {
              return <NavLink key={idx} {...item} menuType="headerMenu" />
            })}
          </div>
        ) : null}
      </div>
      <div className={styles.container}>
        {/* Aside */}
        <div className={styles.aside}>
          {asideMenuConfig && asideMenuConfig.length > 0 ? (
            <AslideMenu {...asideMenuConfig} isIconOnly={isIconOnly} />
          ) : null}
        </div>

        {/* Main */}
        <div className={styles.main}>
          {/* Content */}
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  )
}
