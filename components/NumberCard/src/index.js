import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import './main.scss'
export default function NumberCard({
  number,
  animationTime,
  styles,
  isonlyNumber,
  numberSpacing
}) {
  const [randomNum, setRandomNum] = useState(0)
  const [isAnimationOver, setisAnimationOver] = useState(() => false)
  const [numberSlice,setNumberSlice]=useState(0)
  useEffect(() => {
    setisAnimationOver(false) //防止再次改变参数时不触发动画
    let stringNumber = new String(number).split('');
    let numberSlice="";
    let numIdx=1;
    for (let i = stringNumber.length-1; i >=0; i--) {
      if(stringNumber[numIdx] && (numIdx)%numberSpacing===0 && i!== 0){
        numberSlice+=(stringNumber[i]+",");
      }else{
        numberSlice+=stringNumber[i];
      }
      numIdx++;
    };
    console.log(numberSlice)
    numberSlice=numberSlice.split('').reverse().join('')
    setNumberSlice(val=>numberSlice)
    let animationNum=numberSlice.split(",")
    let timeout
    let interval = setInterval(() => {
      let str = ''
      for (let j = 0; j < animationNum.length; j++) {
        j != 0 && (str += ',')   
        for (let i = 0; i < animationNum[j].length; i++) {
          str += parseInt(Math.random() * 10)
        }
      }
      setRandomNum(() => str)
    }, 100)
    timeout = setTimeout(() => {
      interval && clearInterval(interval)
      setisAnimationOver(true)
    }, animationTime)
    return () => {
      interval && clearInterval(interval)
      timeout && clearTimeout(interval)
    }
  }, [number])

  if (isonlyNumber) {
    if (isAnimationOver) {
      return number
    } else {
      return String(randomNum)
    }
  } else {
    return (
      <span style={{ ...NumberCard.defaultProps.styles, ...styles }}>
        {isAnimationOver ? numberSlice : randomNum}
      </span>
    )
  }
}

NumberCard.propTypes = {
  number: Proptypes.number,
  numberSpacing: Proptypes.number,
  animationTime: Proptypes.number,
  styles: Proptypes.object,
  isonlyNumber: Proptypes.bool
}

NumberCard.defaultProps = {
  number: 233333,
  animationTime: 2000,
  isonlyNumber: false,
  numberSpacing:3,
  styles: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold'
  }
}
