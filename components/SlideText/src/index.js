import React,{useState,useEffect,useRef,useLayoutEffect} from 'react';
import propTypes from 'prop-types';
import  './main.scss';
export default function ScrollText({text,isOnce,animationTime,styles}) {
  const [left,setLeft]=useState(0);
  const textNode=useRef(null);
  const containerNode=useRef(null);
  const width=useRef(0);
  const move=()=>{
   let isOnePass=false;
   const interval= setInterval(() => {
       setLeft((val)=>{
          if(Math.abs(val)>width.current.containerWidth){
              isOnePass=true;
              return width.current.containerWidth;
          }
          if(isOnce&&isOnePass){//仅执行一次且一次已经过去
            clearInterval(interval);
            setLeft(0);
          }
            return val-1;
      })
    }, animationTime/width.current.textWidth);
    return interval;
  }

  useLayoutEffect(()=>{//渲染完成重新计算宽度，自适应
    width.current={
      textWidth:textNode.current.offsetWidth,
      containerWidth:containerNode.current.parentNode.offsetWidth
    }
  })
  useEffect(() => {
    const interval=move();
    return () => {
      interval&&clearInterval(interval);
    };
  }, [])
  return (
    <div className="scroll-text-wrap" ref={containerNode}>
      <span ref={textNode} className={'text'} style={{transform:`translateX(${left}px)`,...styles}}>{text}</span>
    </div>
  );
}

ScrollText.propTypes = {
  text:propTypes.string,
  animationTime:propTypes.number,
  isOnce:propTypes.bool,
  styles:propTypes.object
};

ScrollText.defaultProps = {
  text:'请输入您的文字滚动，越长越好！！！请输入您的文字滚动，越长越好！！！',
  animationTime:5000,
  isOnce:false,
  styles:{
    fontWeight:'bold',
    fontSize:16,
  }
};
