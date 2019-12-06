import React from 'react'
import propTypes from 'prop-types'
import './main.scss'
export default function LogoShow({ children, lineColor, width }) {
  return (
    <div
      className={['logo-wrap-asdkljg2']}
      style={{ width: width, height: width, lineHeight: `${width}px` }}
    >
      {React.cloneElement(children, {
        className: children.props.className
          ? `${children.props.className} children`
          : 'children'
      })}
      <div className={'d3container'}>
        {[1, 2, 3, 4].map(item => {
          return (
            <span
              className={'item'}
              style={{ borderColor: lineColor }}
              key={item}
            ></span>
          )
        })}
      </div>
    </div>
  )
}
LogoShow.propTypes = {
  children: propTypes.node,
  lineColor: propTypes.string,
  width: propTypes.number
}
LogoShow.defaultProps = {
  children: (
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
  ),
  lineColor: 'rgba(255,255,255,0.2)',
  width: 200
}
