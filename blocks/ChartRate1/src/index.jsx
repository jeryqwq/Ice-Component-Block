import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import G2 from "@antv/g2"

import styles from "./index.module.scss"

export default function ChartRate1({}) {
  const [tabsIndex, setTabsIndex] = useState(0)
  const [chartData, setChartData] = useState([
    { item: "事例一", count: 40, percent: 0.4 },
    { item: "事例二", count: 21, percent: 0.21 },
    { item: "事例三", count: 17, percent: 0.17 },
    { item: "事例四", count: 13, percent: 0.13 },
    { item: "事例五", count: 9, percent: 0.09 }
  ])
  const [rateData, setRateData] = useState([
    { label: "industry_company", record: 88 },
    { label: "industry_company", record: 88 },
    { label: "industry_company", record: 88 },
    { label: "industry_company", record: 88 },
    { label: "industry_company", record: 88 },
    { label: "industry_company", record: 88 }
  ])
  const chartLf = useRef(null)
  // const
  useEffect(() => {
    const chart = new G2.Chart({
      container: chartLf.current,
      forceFit: true,
      height: 380,
      animate: true
    })

    chart.tooltip({
      showTitle: false,
      itemTpl:
        '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    })
    chart.source(chartData, {
      percent: {
        formatter: val => {
          val = val * 100 + "%"
          return val
        }
      }
    })
    chart.coord("theta", {
      radius: 0.85,
      innerRadius: 0.84
    })
    chart.tooltip({
      showTitle: false,
      itemTpl:
        '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    })
    // 辅助文本
    chart.guide().html({
      position: ["50%", "50%"],
      html:
        '<div style="color:#666;font-size: 30px;text-align: center;width: 10em;">2814<br><span style="font-size:22px">用户总数</span></div>',
      alignX: "middle",
      alignY: "middle"
    })
    chart
      .intervalStack()
      .position("percent")
      .color("item")
      .label("percent", {
        formatter: (val, item) => {
          return item.point.item + ": （" + val + "）"
        }
      })
      .tooltip("item*percent", (item, percent) => {
        percent = percent * 100 + "%"
        return {
          name: item,
          value: percent
        }
      })
      .style({
        lineWidth: 1,
        stroke: "#fff"
      })
    chart.render()
    // interval.setSelected(data[0])
  }, [chartData])
  return (
    <div className={styles.ChartRate1}>
      <div className={styles.lf}>
        <div className={styles.titles}>
          标签占比
          <div className={styles.cate}>
            {["人", "事", "物", "地", "组织"].map((item, idx) => (
              <span
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
        <div className={styles.chart} ref={chartLf}></div>
      </div>
      <div className={styles.rg}>
        <div className={styles.titles}>热门标签 </div>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>标签</td>
              <td>标签记录</td>
              <td>变化</td>
            </tr>
          </thead>
          <tbody>
            {rateData.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td
                    className={[styles.index, idx < 3 ? styles.cur : ""].join(
                      " "
                    )}
                  >
                    <span>{idx + 1}</span>
                  </td>
                  <td>{item.label}</td>
                  <td>{item.record}</td>
                  <td className={Math.random() > 0.5 ? styles.up : styles.down}>
                    6.05
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
