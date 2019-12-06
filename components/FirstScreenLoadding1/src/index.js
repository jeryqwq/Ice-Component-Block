import React,{useState,useRef,useEffect} from 'react';
import './main.scss';
import propTypes from 'prop-types';
export default function Loadding({lineColor,isOnlyLoadding}){
    const [loadText,setLoadText]=useState('');
    const [isDieout,setDieOut]=useState(()=>new Array(10));//缓存常量
    const [i,setI]=useState(0);
    const [isAnimatonOver,setIAnimatonOver]=useState(false);
    const stepInfos=useRef(null);
    const timeStracks=useRef(null);//动画延时器存储，组件销毁时移除
    let interval;
    isDieout[0]=true;//第一次渲染时外圈为true，避免在第二次渲染才出现，有一个时间差，优化体验,
    useEffect(() => {
        setIAnimatonOver(false);
        const loadArr="LOADING.....".split('');
        let pi=0;
        timeStracks.current=[];
        stepInfos.current.forEach((item,idx)=>{
            timeStracks.current.push(setTimeout(()=>{
                isDieout[idx]=true;
                if(item.timeoutFn){
                    item.timeoutFn()
                }
            },item.timeout))
           if(item.dieout){
            timeStracks.current.push(
                setTimeout(()=>{
                    isDieout[idx]=false;
                    setI((val)=>val+1);
                    if(item.dieoutoutFn){
                        item.dieoutoutFn();
                    }
                 },item.dieout)
            )
           }
        })
        interval=setTimeout(() => {
            interval= setInterval(()=>{
                pi<loadArr.length?setLoadText((val)=>val+' '+loadArr[pi++]):(()=>{
                    interval&&clearInterval(interval);
                    let i=0;
                    interval=setInterval(()=>{
                        ++i>100?clearInterval(interval):setI(i);
                    },15);
                })();
            },40)
        }, 1000);
        return () => {
            interval&&clearInterval(interval);
            interval&&clearTimeout(interval);
            timeStracks.current&&timeStracks.current.forEach(element => {
                element&&clearTimeout(element);
            });
        };
    }, [lineColor,isOnlyLoadding])
    //函数组件共享同一个ref实例，避免重新渲染重新创建对象
     stepInfos.current= [
        {
            stepEl:<path  d="M600 400 A 100 100 0 0 0 600 800 M600 400A 100 100 0 0 1 600 800 " stroke={lineColor} ></path>,
            timeout:0,
            dieout:5000,
            className:  ['step-1-1'],
        },{
            stepEl:<text stroke={lineColor} fill={lineColor}  x="450" y="610" >{loadText}</text>,
            timeout:0,
            dieout:4000,
            className:  ['load-text'],
            dieoutoutFn:()=>{
                isDieout[1]=true;
                const loadArr="LINEWELLUED".split('');
                let i=0,interval;
                setLoadText('');
                interval=setInterval(() => {
                    if(i<loadArr.length){
                        setLoadText(val=>val+" "+loadArr[i++])
                    }else{
                       clearInterval(interval) ;
                    }
                }, 100);
            }
        },
        {
            stepEl:<text stroke={lineColor} fill={lineColor} x="570" y="680" >{i}</text>,
            timeout:2000,
            dieout:4000,
            className:  ['process-text'],
            dieoutoutFn:()=>{
            isOnlyLoadding&&setIAnimatonOver(true)
            }
        },{
          stepEl:<circle cx="600" cy="600" r="205" fill="none" stroke={lineColor}  ></circle>,
          timeout:2000,
          dieout:7200,
          className:  ['step-1-2']
        },
        { 
          stepEl:<g>
          <circle cx="600" cy="600" r="200" fill="none" stroke={lineColor} strokeWidth="8" className={  ['step-2-1']}></circle> 
          <circle cx="600" cy="600" r="205" fill="none" stroke={lineColor} strokeWidth="8" className={  ['step-2-2']}></circle> 
          <circle cx="600" cy="600" r="210" fill="none" stroke={lineColor} strokeWidth="8" className={  ['step-2-3']}></circle> 
        </g>,
          timeout:4200,
          dieout:7200,
          className:  ['step-2'],
          timeoutFn:()=>{

          },
          dieoutoutFn:()=>{
            isDieout[1]=false;
            setI(val=>val+1);
            !isOnlyLoadding&&setIAnimatonOver(true)
          }
        },
        {
            stepEl:<g>
            <circle cx="600" cy="600" r="200" fill="none" stroke={lineColor} strokeWidth="8" className={  ['step-2-1']}></circle> 
            <circle cx="600" cy="600" r="205" fill="none" stroke={lineColor} strokeWidth="8" className={  ['step-2-2']}></circle> 
            <circle cx="600" cy="600" r="210" fill="none" stroke={lineColor} strokeWidth="8" className={  ['step-2-3']}></circle> 
            </g>,
            timeout:4200,
            dieout:7000,
            dieoutoutFn:()=>{
                setLoadText('');
            },
            className:  ['step-3'],
        }
    ]
   
    return isAnimatonOver?<></>:<div className={  ['body-wrap-asd12a1sd54rqu']}>
        <svg viewBox="0 0 1200 1200" width="1200" height="1200" >
            {
                stepInfos.current.map((item,idx)=>{
                    return (
                        isDieout[idx]?React.cloneElement(item.stepEl,{
                            className:item.className,
                            key:idx
                        }):undefined
                    )
                })
            }
        </svg>
    </div>
}
Loadding.propTypes={
    lineColor:propTypes.string,
    isOnlyLoadding:propTypes.bool
}
Loadding.defaultProps={
    lineColor:'white',
    isOnlyLoadding:false
}