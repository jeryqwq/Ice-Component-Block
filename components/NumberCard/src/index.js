import React,{useState,useEffect,useRef} from 'react';
import Proptypes from 'prop-types';
import  './main.scss';
export default function NumberCard({number,animationTime,styles,isonlyNumber}) {
  const [randomNum,setRandomNum]=useState('000,00');
  const [isAnimationOver,setisAnimationOver]=useState(()=>false);
  useEffect(() => {
    setisAnimationOver(false);//防止再次改变参数时不触发动画
    let numberSlice=String(number).split(',');
    let timeout;
    let interval=setInterval(() => {
      let str='';
      for(let j =0;j<numberSlice.length;j++){
        j!=0&&(str+=',');
        for(let i =0;i<numberSlice[j].length;i++){
          str+=parseInt(Math.random()*10);
         }
       }
      setRandomNum(()=>str);
    }, 100);
    timeout=setTimeout(() => {
      interval&&clearInterval(interval);
      setisAnimationOver(true);
    }, animationTime);
    return () => {
      interval&&clearInterval(interval);
      timeout&&clearTimeout(interval);
    };
  },[number]);
 
  if(isonlyNumber){
    if(isAnimationOver){
      return number;
    }else{
      return String(randomNum);
    }
  }else{
    return (
      <span  style={{...NumberCard.defaultProps.styles,...styles}}>
        {isAnimationOver?number:String(randomNum)}
      </span>
    );
  }
}

NumberCard.propTypes = {
  number:Proptypes.string,
  animationTime:Proptypes.number,
  styles:Proptypes.object,
  isonlyNumber:Proptypes.bool
};

NumberCard.defaultProps = {
  number:'233,333',
  animationTime:2000,
  isonlyNumber:false,
  styles:{
    color:'blue',
    fontSize:25,
    fontWeight:'bold'
  }
};
