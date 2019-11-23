import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './main.scss';

/** 表格数据展示组件*/
export default function TableShower({
  tableRows,
  isBanner,
  animationSpacing,
  theadStyles,
  tbodyStyles,
  oddRowBackgroundColor,
  evenRowBackgroundColor,
  orderNumberStyles,
  columns,
  data,
  isLoop,
}) {
  const itemTr = useRef(null);
  const [height, setHeight] = useState(0);
  const [curIdx, setCurIdx] = useState(0);
  const [isAni, setIsAni] = useState(true);
  const interval=useRef(null);
  theadStyles = { ...TableShower.defaultProps.theadStyles, ...theadStyles };
  tbodyStyles = { ...TableShower.defaultProps.tbodyStyles, ...tbodyStyles };
  orderNumberStyles = {
    ...TableShower.defaultProps.orderNumberStyles,
    ...orderNumberStyles,
  };
  useEffect(() => {
    interval.current&&clearInterval( interval.current);
    const itemHeight = itemTr.current.clientHeight;
    const wrapHeight = itemHeight * tableRows;
    setHeight(wrapHeight);
    if (isBanner && data.length >= tableRows) {
      interval.current=setInterval(() => {
        setCurIdx(val => {
          if (val >= data.length) {
            setIsAni(false);
            !isLoop && clearInterval( interval.current);
            return 0;
          } else {
            setIsAni(true);
            return val + 1;
          }
        });
      }, animationSpacing);
    }
    return () => {
      interval.current&&clearInterval( interval.current);
    };
  }, [data, columns, tableRows, isBanner, animationSpacing, isLoop]);
  const transformStyle = function() {
    return `translateY(-${(itemTr.current ? itemTr.current.clientHeight : 0) *
      curIdx}px)`;
  };
  const TableElItem = data.map((item1, idx1) => (
    <tr
      style={{
        background:
          idx1 % 2 === 0 ? oddRowBackgroundColor : evenRowBackgroundColor,
      }}
      key={idx1}
      ref={itemTr}
    >
      <td width="40" className="order-num">
        <span style={{ ...orderNumberStyles }}>{idx1 + 1}</span>
      </td>
      {columns.map((item2, idx2) => (
        <td
          width={item2.width ? item2.width : '50'}
          style={{ ...tbodyStyles }}
          key={idx2}
        >
          {typeof item1[columns[idx2].key] === 'function'
            ? item1[columns[idx2].key](item1)
            : item1[columns[idx2].key]}
        </td>
      ))}
    </tr>
  ));
  return (
    <div className="TableShower-as2da2sf45as">
      <table>
        <thead>
          <tr style={{ ...theadStyles }}>
            <td width="40" />
            {columns.map((item, idx) => (
              <td width={item.width ? item.width : '50'} key={idx}>
                {item.title}
              </td>
            ))}
          </tr>
        </thead>
      </table>
      <div className="scroll-tab" style={{ height }}>
        <table
          style={{ transform: transformStyle() }}
          className={`${isAni ? 'ani' : ''}`}
        >
          <tbody>
            {TableElItem}
            {data.length >= tableRows ? TableElItem : <></>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

TableShower.propTypes = {
    /**  表格的行数 */
  tableRows: PropTypes.number,
  /** 是否开启滑动 */
  isBanner: PropTypes.bool,
  /** 头部的tr标签JSX样式 */
  theadStyles: PropTypes.object,
  /** body标签的JSX样式 */
  tbodyStyles: PropTypes.object,
  /** 滑动动画每次执行的间隔 */
  animationSpacing: PropTypes.number,
  /** 奇数行的背景 */
  oddRowBackgroundColor: PropTypes.string,
  /** 偶数行的背景 */
  evenRowBackgroundColor: PropTypes.string,
  /** 自定义序列号样式 */
  orderNumberStyles: PropTypes.object,
  /**  表头信息,widht:表格的宽度,key:表体对应的key值,title:表头名字 */
  columns: PropTypes.array,
  /** 表体内的数据,映射表头信息展示 */
  data: PropTypes.array,
  /** 是否开启无脑循坏 */
  isLoop: PropTypes.bool,
};
const dataItem = function(idx) {
  return {
    data1: `第${idx}行1`,
    data2: `第${idx}行2`,
    data3: `第${idx}行3`,
    data4: `第${idx}行4`,
    data5: item => {
      return <span>{item.data1}自定义函数渲染</span>;
    },
  };
};
TableShower.defaultProps = {
  tableRows: 8,
  isBanner: true,
  animationSpacing: 2000,
  isLoop: true,
  theadStyles: {
    background: '#00baff',
    lineHeight: '50px',
    color: 'white',
  },
  tbodyStyles: {
    height: 45,
    color: 'white',
    fontSize: 12,
  },
  oddRowBackgroundColor: '#003b51',
  evenRowBackgroundColor: '#0a2732',
  orderNumberStyles: {
    display: 'inline-block',
    width: 30,
    height: 30,
    lineHeight: '30px',
    background: '#00baff',
    borderRadius: '50%',
    color: 'white',
  },
  columns: [
    {
      title: '表头1',
      key: 'data1',
    },
    {
      title: '表头2',
      key: 'data2',
    },
    {
      title: '表头3',
      key: 'data3',
    },
    {
      title: '表头4',
      key: 'data4',
    },
    {
      title: '表头5',
      key: 'data5',
    },
  ],
  data: (function() {
    const arr = [];
    for (let index = 0; index < 20; index++) {
      arr.push(dataItem(index + 1));
    }
    return arr;
  })(),
};
