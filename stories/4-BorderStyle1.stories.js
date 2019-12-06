import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number,array,object,button,color,text } from '@storybook/addon-knobs';
import {genSetupMarkdown} from './util';
import BorderStyle from '../components/BorderStyle1/src/index'
import usage from './../components/BorderStyle1/demo/usage.md';
import  demo2 from './../components/BorderStyle1/demo/demo2.md';
import demo3 from './../components/BorderStyle1/demo/demo3.md'
const componentName="BorderStyle1";
const stories = storiesOf('边框样式', module);
stories.addDecorator(withKnobs);
stories.add("默认配置",()=><div style={{background:'black'}}>
    <BorderStyle  lineColor={color("主题色配置","#fff")}
    title={text("标题字符串","这是标题内容要很长很长很长这是标题内容要很长")}
    content={text("内容","这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁")}
    height={number("整体高度",500)}
/>
</div>,{
    notes:{
        "安装":genSetupMarkdown(componentName),
        "相关文档":usage
    }
});
stories.add("自定义头部和内容",()=>{
    return <div style={{background:'black'}}>
    <BorderStyle  lineColor={color("主题色配置","#fff")}
    title={text("标题字符串","这是标题内容要很长很长很长这是标题内容要很长")}
    content={text("内容","这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁，这是边框内的内容文字还要有打字动画和闪烁")}
    height={number("整体高度",500)}
    />
    </div>
},{
    notes:{
        "安装":genSetupMarkdown(componentName),
        "相关文档":demo2
    }
});
stories.add("头部和内容渲染函数",()=>{
    return <div style={{background:'black'}}>
    <BorderStyle  lineColor={color("主题色配置","#fff")}
    title={text("标题字符串","这是标题内容要很长很长很长这是标题内容要很长")}
    // content={()=>}
    height={number("整体高度",500)}
    />
    </div>
},{
    notes:{
        "安装":genSetupMarkdown(componentName),
        "相关文档":demo3
    }
})