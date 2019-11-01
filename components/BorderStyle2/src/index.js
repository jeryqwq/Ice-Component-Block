import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './main.scss'
const border = ['left-top', 'right-top', 'left-bottom', 'right-bottom']
const BorderBox = ({ children, className, style,colors,dur }) => {
 
  const colorStep=colors?colors.join(";"):'#4fd2dd;#235fa7;#4fd2dd'
  const curDur=dur?dur:0.5;
  return (
    <div className={"dv-border-box"} style={style}>
      {border.map(borderName => (
        <svg
          width='150px'
          height='150px'
          key={borderName}
          className={`${borderName} border`}
        >
          <polygon
            fill='#4fd2dd'
            points='6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63'
          >
            <animate
              attributeName='fill'
              values={colorStep}
              dur={`${curDur}s`}
              begin='0s'
              repeatCount='indefinite'
            />
          </polygon>
          <polygon
            fill='#235fa7'
            points='27.5,4.8 38.4,4.8 35.4,7.8 30.59,7.8'
          >
            <animate
              attributeName='fill'
              values={colorStep}
              dur={`${curDur}s`}
              begin='0s'
              repeatCount='indefinite'
            />
          </polygon>
          <polygon
            fill='#4fd2dd'
            points='9,54 9,63 7.19,66 7.19,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54'
          >
            <animate
              attributeName='fill'
              values={colorStep}
              dur={`${curDur*2}s`}
              begin='0s'
              repeatCount='indefinite'
            />
          </polygon>
        </svg>
      ))}
      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
}

export default BorderBox