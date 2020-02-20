import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import styles from "./index.module.scss"
import renderChart from "./chart"
export default function ChartLineBar() {
  const [chartData, setChartData] = useState([
    4.2,
    3.8,
    4.8,
    3.5,
    2.9,
    2.8,
    3,
    5,
    2.9,
    2.8,
    3,
    5
  ])
  const [chartData2, setChartData2] = useState([
    5.2,
    4.8,
    7.8,
    3.5,
    2.9,
    4.8,
    5,
    1,
    2.9,
    2.8,
    3,
    5
  ])
  const [tabsIndex, setTabsIndex] = useState(0)

  const chartWrap = useRef(null)
  useEffect(() => {
    const resize = renderChart(chartWrap.current, chartData, chartData2)
    //传递数据和dom对象渲染图表
    return () => {
      window.removeEventListener("resize", resize) //组件销毁删除resize事件
    }
  }, [chartData, chartData2]) //数组改变重现渲染图表
  return (
    <div className={styles.ChartLineBar}>
      <div className={styles.titles}>
        数据质量趋势
        <div className={styles.cate}>
          {["最近30天", "最近一年"].map((item, idx) => (
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
      <div className={styles.chartWrap} ref={chartWrap}></div>
    </div>
  )
}
