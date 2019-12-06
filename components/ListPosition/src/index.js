import React, { useState, useRef,useEffect, useLayoutEffect } from 'react';
import './main.scss';
import Proptypes from 'prop-types';
import {  } from '@storybook/addons';

function randomColor() {
  return `rgba(${parseInt(Math.random() * 255)},${parseInt( Math.random() * 255)},${parseInt(Math.random() * 255)},${Math.random()})`;
}
export default function ListPosition({
  data,
  itemSize,
  valueStyle,
  labelStyle,
  formatLabel,
  formatValue,
}) {
  const [clearData,setclearData]=useState(()=>[]);
  const containerWidth = useRef(null);
  const maxNum = useRef(0);
  const [total,setTotal] = useState(0);
  useEffect(()=>{
    let privateData=new Array(...data);
    privateData.forEach(element => {
      // 求出总值
      !element.background && (element.background = randomColor());
      !element.borderStyle && (element.borderStyle = `solid 1px ${randomColor()}`);
    });
    privateData.forEach(element => {
      // 每一项占比和对应占比的宽度
      element._percentage = element.value / total;
      element._width =containerWidth.current.clientWidth * element._percentage - 50;
    });
    privateData = privateData.sort((a, b) => b.value- a.value ); // 排序
    maxNum.current = privateData[data.length - 1]; // 得到最大值
    privateData.forEach(element => {
      // 渲染对应宽度时会显得单个图表太窄了，以最大项为为单位向外扩充
        element._factWidth = (1 - privateData[0]._percentage) * containerWidth.current.clientWidth +element._width;
    });
    setclearData(privateData);
  },[total]);
  //试图刷新后重新计算排名状态
  useLayoutEffect(()=>{
    let priTotal=0;
    data.forEach((item)=>{
      priTotal+=item.value;
    });
    setTotal(priTotal);
  });
  return (
    <div
      className="list-position-cj"
      ref={containerWidth}
      style={{ height: itemSize * 3 * data.length }}
    >
      {clearData.map((item, idx) => (
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
                transform: ` translateX(${item._factWidth -itemSize / 2}px) rotateY(90deg)`,
              }}
             />
            <span
              className="right"
              style={{
                width: itemSize,
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                transform: `translateX(-${itemSize / 2}px) rotateY(-90deg)`,
              }}
             />
            <span
              className="top"
              style={{
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                width: `${item._factWidth}px`,
                transform: ` translateY(-${itemSize / 2}px) rotateX(90deg)`,
              }}
             />
            <span
              className="bottom"
              style={{
                height: itemSize,
                width: `${item._factWidth}px`,
                background: item.background,
                border: item.borderStyle,
                transform: `translateY(${itemSize / 2}px) rotateX(-90deg)`,
              }}
             />
            <span
              className="frond"
              style={{
                width: `${item._factWidth}px`,
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                transform: `translateZ(${itemSize / 2}px)`,
              }}
             />
            <span
              className="back"
              style={{
                width: `${item._factWidth}px`,
                height: itemSize,
                background: item.background,
                border: item.borderStyle,
                transform: `translateZ(-${itemSize / 2}px)`,
              }}
             />
          </div>
          <span className="value" style={{ ...valueStyle }}>
            {formatValue?formatValue(item):item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
ListPosition.propTypes = {
  data: Proptypes.array,
  itemSize: Proptypes.number,
  valueStyle: Proptypes.object,
  labelStyle: Proptypes.object,
  formatLabel: Proptypes.func,
  formatValue: Proptypes.func,
};
ListPosition.defaultProps = {
  formatLabel:undefined,
  formatValue:undefined,
  itemSize: 20,
  valueStyle: {},
  labelStyle: {},
  data: [
    {
      label: '2012年人均GDP',
      value: 50,
      borderStyle: 'none',
    },
    {
      label: '2015年人均GDP',
      value: 80,
      borderStyle: 'none',
    },
    {
      label: '2017年人均GDP',
      value: 80,
      borderStyle: 'none',
    },
    {
      label: '2018年人均GDP',
      value: 100,
      borderStyle: 'none',
    },
    {
      label: '2019年人均GDP',
      value: 95,
      borderStyle: 'none',
    },
  ],
};
