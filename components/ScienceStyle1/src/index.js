import React,{Component} from 'react';
import   "./main.scss";
import propTypes from 'prop-types';
export default class  extends Component{
    static propTypes={
        zoom:propTypes.number,
        lineColor:propTypes.string
    }
    static defaultProps={
        lineColor:'#88d33f',
        zoom:1
    }
    constructor(props){
        super(props);
        this.state={
            circles:[
                {
                    class:'',
                    r:'85',
                    width:'1'
                },{
                    class:'circle1',
                    r:'80',
                    width:'4'
                },{
                    class:'circle11',
                    r:'78',
                    width:'4'
                },{
                    class:'circle12',
                    r:'75',
                    width:'4'
                },{
                    class:'circle2',
                    r:'70',
                    width:'2'
                },{
                    class:'circle21',
                    r:'65',
                    width:'2'
                },{
                    class:'circle22',
                    r:'60',
                    width:'2'
                },{
                    class:'circle23',
                    r:'65',
                    width:'10'
                },{
                    class:'circle3',
                    r:'50',
                    width:'10'
                },{
                    class:'circle31',
                    r:'53',
                    width:'4'
                }
                ,{
                    class:'circle32',
                    r:'53',
                    width:'4'
                },{
                    class:'circle33',
                    r:'46',
                    width:'4'
                },
                {
                    class:'circle4',
                    r:'35',
                    width:'8'
                }
                ,{
                    class:'circle41',
                    r:'35',
                    width:'8'
                },
                {
                    class:'circle42',
                    r:'35',
                    width:'8'
                },
                {
                    class:'circle5',
                    r:'35',
                    width:'2'
                },
            ]
        }
    }
    generateCircle=(className,r,width)=> <circle key={Math.random()}  fill="none" cx="100" cy="100" r={r} className={[className]} 
    strokeWidth={width} stroke={this.props.lineColor}></circle>
    render(){
        const {zoom}=this.props;
        const border=200*zoom;
        return <div style={{height:`${border}px`,width:`${border}px`,display:'inline-block'}}>
            <svg className={  ['c-wrap-a1sd32a12g']} width="200px" height="200px" style={{ transformOrigin:'0 0',transform:`scale(${zoom})`}}>
                {
                    this.state.circles.map((item)=>this.generateCircle(item.class,item.r,item.width))
                }
            </svg>
        </div>
      
    }
}
