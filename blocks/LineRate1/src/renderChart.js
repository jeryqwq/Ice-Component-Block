import echarts from "echarts"
function resetState(data, genChartState) {
  //为传入数组重置数据状态，是否展示label和symbol标志的颜色调整
  data.forEach((item, idx) => {
    genChartState[idx] = {
      value: item,
      ...normal
    }
  })
}
//设置数据为选中项，鼠标滑过line时触发事件
function setCurrent(arrData, idx) {
  arrData.forEach(item => {
    item.label = normal.label
    item.itemStyle = normal.itemStyle
  })
  arrData[idx].label = cur.label
  arrData[idx].itemStyle = cur.itemStyle
  return arrData
}
//平常状态
const normal = {
  label: {
    show: false
  },
  itemStyle: {
    color: "white"
  }
}
//选中状态
const cur = {
  label: {
    show: true
  },
  itemStyle: {
    color: "#de6363"
  }
}
//渲染左边的图表
let renderLf = (el, data, datax) => {
  let genChartState = []
  resetState(data, genChartState)
  let option = {
    grid: {
      right: 50,
      left: 50,
      top: 20,
      bottom: 60
    },
    xAxis: {
      type: "category",
      data: datax,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: "#a3a38f"
        }
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "#a3a38f"
        }
      }
    },
    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "shadow",
        label: {
          show: true
        }
      }
    },
    series: [
      {
        itemStyle: {
          color: "white",
          borderColor: "#de6363",
          borderWidth: 3
        },
        lineStyle: {
          color: "#de6363"
        },
        data: genChartState,
        type: "line",
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 10, //标记的大小
        label: {
          show: true,
          position: "top",
          textStyle: {
            fontSize: 24,
            color: "#666666"
          }
        },
        areaStyle: {
          normal: {
            color: "#f8eceb"
          }
        }
      }
    ]
  }
  let chartEl = echarts.init(el)
  chartEl.setOption(option)
  chartEl.on("mouseover", params => {
    option.series[0].data = setCurrent(genChartState, params.dataIndex)
    chartEl.setOption(option)
  })
}
//渲染右边的图表
let renderRg = (el, data, datax) => {
  const colors = ["#de6363", "#8a65ae", "#dfa563", "#62a9dd", "#72c381"]
  let option = {
    grid: {
      left: 100,
      right: 30,
      top: 20,
      bottom: 50
    },
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#a3a38f"
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#a3a38f"
        }
      },
      data: datax
    },
    series: [
      {
        name: "外销",
        type: "bar",
        data: data,
        barWidth: 20,
        itemStyle: {
          color: function(params) {
            return colors[params.dataIndex]
          }
        }
      }
    ]
  }
  const chartEl = echarts.init(el)
  chartEl.setOption(option)
}
export { renderLf, renderRg }
