import React, { useEffect, useRef } from 'react'
import './main.scss'
import Proptypes from 'prop-types'
function randomColor() {
  return `rgba(${parseInt(Math.random() * 255)},${parseInt(
    Math.random() * 255
  )},${parseInt(Math.random() * 255)},${Math.random()})`
}
export default function ListPosition({
  data,
  itemSize,
  valueStyle,
  labelStyle,
  formatLabel,
  formatValue
}) {
  const containerWidth = useRef(null)
  const maxNum = useRef(0)
  const total = useRef(0)
  useEffect(() => {
    total.current = 0
    data.forEach(element => {
      //求出总值
      total.current += element.value
      !element.background && (element.background = randomColor())
      !element.borderStyle &&
        (element.borderStyle = `solid 1px ${randomColor()}`)
    })
    data.forEach(element => {
      //每一项占比和对应占比的宽度
      element._percentage = element.value / total.current
      element._width =
        containerWidth.current.clientWidth * element._percentage - 50
    })
    data = data.sort((a, b) => a.value < b.value) //排序
    maxNum.current = data[data.length - 1] //得到最大值
    data.forEach(element => {
      //渲染对应宽度时会显得单个图表太窄了，以最大项为为单位向外扩充
        element._factWidth =
          (1 - data[0]._percentage) * containerWidth.current.clientWidth +
          element._width
    })
  })
  return (
    <div
      className="ListPosition"
      ref={containerWidth}
      style={{ height: itemSize * 3 * data.length }}
    >
      {data.map((item, idx) => (
        <div
          className="item"
          key={item.label}
          style={{ transform: `translateY(${idx * itemSize * 3}px)` }}
        >
          <span className="name" style={{ ...labelStyle }}>
            {formatLabel?formatLabel(item):item.label}
          </span>
          <div
            className="process"
            style={{ transformOrigin: `100% ${itemSize}px` }}
          >
            <span
              className="left"
              style={{
                width: itemSize,
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                transform: ` translateX(${item._factWidth -
                  itemSize / 2}px) rotateY(90deg)`
              }}
            ></span>
            <span
              className="right"
              style={{
                width: itemSize,
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                transform: `translateX(-${itemSize / 2}px) rotateY(-90deg)`
              }}
            ></span>
            <span
              className="top"
              style={{
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                width: `${item._factWidth}px`,
                transform: ` translateY(-${itemSize / 2}px) rotateX(90deg)`
              }}
            ></span>
            <span
              className="bottom"
              style={{
                height: itemSize,
                width: `${item._factWidth}px`,
                background: item.background,
                border: item.borderStyle,
                transform: `translateY(${itemSize / 2}px) rotateX(-90deg)`
              }}
            ></span>
            <span
              className="frond"
              style={{
                width: `${item._factWidth}px`,
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                transform: `translateZ(${itemSize / 2}px)`
              }}
            ></span>
            <span
              className="back"
              style={{
                width: `${item._factWidth}px`,
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                transform: `translateZ(-${itemSize / 2}px)`
              }}
            ></span>
          </div>
          <span className="value" style={{ ...valueStyle }}>
            {formatValue?formatValue(item):item.value}
          </span>
        </div>
      ))}
    </div>
  )
}
ListPosition.propTypes = {
  data: Proptypes.array,
  itemSize: Proptypes.number,
  valueStyle: Proptypes.object,
  labelStyle: Proptypes.object,
  formatLabel: Proptypes.func,
  formatValue: Proptypes.func
}
ListPosition.defaultProps = {
  itemSize: 20,
  valueStyle: {},
  labelStyle: {},
  data: [
    {
      label: '2012年人均GDP',
      value: 50,
      borderStyle: 'none'
    },
    {
      label: '2015年人均GDP',
      value: 80,
      borderStyle: 'none'
    },
    {
      label: '2017年人均GDP',
      value: 80,
      borderStyle: 'none'
    },
    {
      label: '2018年人均GDP',
      value: 100,
      borderStyle: 'none'
    },
    {
      label: '2019年人均GDP',
      value: 95,
      borderStyle: 'none'
    }
  ]
}
