import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import styles from "./index.module.scss"
import { renderLf, renderRg } from "./renderChart"
export default function LineRate1() {
  const [tabsIndex, setTabsIndex] = useState(0)
  const [tabsIndex2, setTabsIndex2] = useState(0)
  const [lfData, setlfData] = useState([
    1345,
    2356,
    4232,
    5634,
    1232,
    6534,
    879
  ])
  const [rgData, setRgData] = useState([50, 60, 20, 35, 34, 67])
  const elRef = useRef({
    chartLf: null,
    chartRg: null
  })
  useEffect(() => {
    renderLf(elRef.current.chartLf, lfData, [
      "18/04/19",
      "18/04/19",
      "18/04/19",
      "18/04/19",
      "18/04/19",
      "18/04/19",
      "18/04/19"
    ])
    renderRg(elRef.current.chartRg, rgData, [
      "mysql-couu",
      "mysql-couu",
      "mysql-couu",
      "mysql-couu",
      "mysql-couu"
    ])
    return () => {}
  }, [])
  return (
    <div className={styles.LineRate1}>
      <div className={styles.lf}>
        <div className={styles.titles}>
          元数据更新量
          <div className={styles.cate}>
            {["新增", "更新"].map((item, idx) => (
              <span
                key={idx}
                className={[
                  styles.item,
                  idx === tabsIndex ? styles.cur : ""
                ].join(" ")}
                onClick={() => {
                  setTabsIndex(idx)
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          className={styles.chart}
          ref={el => {
            elRef.current.chartLf = el
          }}
        ></div>
      </div>
      <div className={styles.rg}>
        <div className={styles.titles}>
          元数据分类占比TOP5
          <div className={styles.cate}>
            {["总量", "新增", "更新", "过期"].map((item, idx) => (
              <span
                key={idx}
                className={[
                  styles.item,
                  idx === tabsIndex2 ? styles.cur : ""
                ].join(" ")}
                onClick={() => {
                  setTabsIndex2(idx)
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          className={styles.chart}
          ref={el => {
            elRef.current.chartRg = el
          }}
        ></div>
      </div>
    </div>
  )
}
