import React, { useState } from "react"
import { Nav } from "@alifd/next"
import { useHistory } from "react-router-dom"
import { asideMenuConfig } from "@/config/menu"
import styles from "./index.module.scss"
const { Item, SubNav } = Nav

function MenuIcon(icon) {
  return (
    <span className={"iconMenu"}>
      <svg width="15" height="17">
        <path className={`iconMenu${icon}`}></path>
      </svg>
    </span>
  )
}
let AslideMenu = ({isIconOnly}) => {
  let history = useHistory()
  const LinkTo = path => {
    path && path !== "" && history.push(path)
  }
  return (
    <div className={styles.headWrap} style={{width:isIconOnly?'50px':'212px'}}>
      <Nav openMode="single" 
      iconOnly={isIconOnly}
      mode={isIconOnly?'popup':'inline'}
      hasArrow={false}
      hasTooltip={false}
      triggerType={!isIconOnly?'click':'hover'}
      >
        {asideMenuConfig.map((item, idx) => {
          if (item.children && Array.isArray(item.children)) {
            //有子节点便利子节点渲染子节点，否则渲染单个菜单
            return (
              <SubNav
                key={idx}
                label={<span className={styles.menuTxt}>{item.name}</span>}
                icon={MenuIcon(item.icon)}
              >
                {item.children.map((item, idx) => {
                  if (item.children && Array.isArray(item.children)) {
                    //子节点还有children时
                    return (
                      <SubNav  key={ idx} label={item.name} >
                        {item.children.map(item => (
                          <Item onClick={() => LinkTo(item.path)} key={item.id}>
                            <span className={styles.cchild}>{item.name}</span>
                          </Item>
                        ))}
                      </SubNav>
                    )
                  } else {
                    return (
                      <Item onClick={() => LinkTo(item.path)} key={item.id}>
                        {item.name}
                      </Item>
                    )
                  }
                })}
              </SubNav>
            )
          } else {
            return (
              <Item
                key={item.id}
                onClick={() => LinkTo(item.path)}
                icon={MenuIcon(item.icon)}
              >
                <span className={styles.menuTxt}>{item.name}</span>
              </Item>
            )
          }
        })}
      </Nav>
    </div>
  )
}

export default AslideMenu
