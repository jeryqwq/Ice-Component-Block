import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import EditTree from "./EditTree"
import styles from "./index.module.scss"
import MixTable from "./MixTable"
export default function TableMixTree({}) {
  return (
    <div className={styles.TableMixTree}>
      <div className={styles.layoutLeft}>
        {/* 节点有添加其他功能键，自己定义渲染的内容 */}
        <EditTree />
      </div>
      <div className={styles.layoutRight}>
        <MixTable />
      </div>
    </div>
  )
}

TableMixTree.propTypes = {}

TableMixTree.defaultProps = {}
