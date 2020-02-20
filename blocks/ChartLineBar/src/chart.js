import echarts from "echarts"

export default (el, data, data2) => {
  let option = {
    grid: {
      top: "10%",
      bottom: "15%"
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true
        }
      }
    },
    legend: {
      data: [{ name: "          问题数" }, { name: "          问题率" }],
      top: "95%",
      textStyle: {
        color: "#999999"
      },
      itemGap: 80,
      icon: "rect",
      itemWidth: 40,
      itemHeight: 3
    },
    xAxis: {
      data: [
        "10-1",
        "10-2",
        "10-1",
        "10-2",
        "10-1",
        "10-2",
        "10-1",
        "10-2",
        "10-2",
        "10-1",
        "10-2",
        "10-1"
      ],
      axisLine: {
        show: true //隐藏X轴轴线
      },
      axisTick: {
        show: true //隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#d1d1c7" //X轴文字颜色
        }
      },
      axisLine: {
        lineStyle: {
          color: "#d1d1c7"
        }
      }
    },
    yAxis: [
      {
        type: "value",
        name: "标签记录",
        nameTextStyle: {
          color: "#b3b3aa"
        },
        splitLine: {
          show: true
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: true
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#b3b3aa"
          }
        },
        axisLine: {
          lineStyle: {
            color: "#b3b3aa"
          }
        }
      },
      {
        type: "value",
        name: "变化率",
        nameTextStyle: {
          color: "#b3b3aa"
        },
        position: "right",
        splitLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: "#b3b3aa"
          }
        },
        axisLabel: {
          show: true,
          formatter: "{value} %", //右侧Y轴文字显示
          textStyle: {
            color: "#b3b3aa"
          }
        }
      }
    ],
    series: [
      {
        name: "          问题数",
        type: "bar",
        barWidth: "30%",
        itemStyle: {
          normal: {
            color: "#de6363"
          }
        },
        data: data
      },
      {
        name: "          问题率",
        type: "line",
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 0, //标记的大小

        itemStyle: {
          normal: {
            color: "#dfa563"
          }
        },
        data: data2
      }
    ]
  }
  let chartEl = echarts.init(el)
  chartEl.setOption(option)
  function resize() {
    chartEl.resize()
  }
  window.addEventListener("resize", resize)
  return resize
}
