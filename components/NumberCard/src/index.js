import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import './main.scss';

export default function NumberCard({
  number,
  animationTime,
  styles,
  isonlyNumber,
  numberSpacing,
  spaceSymbol
}) {
  const [randomNum, setRandomNum] = useState(0);
  const [isAnimationOver, setisAnimationOver] = useState(() => false);
  const [numberSlice,setNumberSlice]=useState(0);
  useEffect(() => {
    setisAnimationOver(false); // 防止再次改变参数时不触发动画
    const stringNumber = new String(number).split('');
    let numberSlice="";
    let numIdx=1;
    for (let i = stringNumber.length-1; i >=0; i--) {
      if(stringNumber[numIdx] && (numIdx)%numberSpacing===0 && i!== 0){
        numberSlice+=(`${stringNumber[i]}${spaceSymbol}`);
      }else{
        numberSlice+=stringNumber[i];
      }
      numIdx++;
    };
    numberSlice=numberSlice.split('').reverse().join('');
    setNumberSlice(val=>numberSlice);
    const animationNum=numberSlice.split(spaceSymbol);
    let timeout;
    const interval = setInterval(() => {
      let str = '';
      for (let j = 0; j < animationNum.length; j++) {
        j != 0 && (str +=spaceSymbol);   
        for (let i = 0; i < animationNum[j].length; i++) {
          str += parseInt(Math.random() * 10);
        }
      }
      setRandomNum(() => str);
    }, 100);
    timeout = setTimeout(() => {
      interval && clearInterval(interval);
      setisAnimationOver(true);
    }, animationTime);
    return () => {
      interval && clearInterval(interval);
      timeout && clearTimeout(interval);
    };
  }, [animationTime, number, numberSpacing,spaceSymbol]);

  if (isonlyNumber) {
    if (isAnimationOver) {
      return number;
    } else {
      return String(randomNum);
    }
  } else {
    return (
      <span style={{ ...NumberCard.defaultProps.styles, ...styles }}>
        {isAnimationOver ? numberSlice : randomNum}
      </span>
    );
  }
}

NumberCard.propTypes = {
  /** 动画执行后显示的数据 */	
  number: Proptypes.number,
  /** 逗号分隔的位数 */	
  numberSpacing: Proptypes.number,
  /** 动画执行时间(ms) */
  animationTime: Proptypes.number,
   /** 自定义JSX样式渲染 */
  styles: Proptypes.object,
   /** 是否渲染纯数字，无任何父元素 */
  isonlyNumber: Proptypes.bool,
  /** 指定间隔分隔的符号 */
  spaceSymbol:Proptypes.string
};

NumberCard.defaultProps = {
  number: 233333,
  animationTime: 2000,
  isonlyNumber: false,
  numberSpacing:3,
  spaceSymbol:',',
  styles: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
};
