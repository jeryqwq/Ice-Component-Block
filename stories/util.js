const config={
    npmHost:require ('./../package.json').materialConfig.unpkgHost,
}
export const genSetupMarkdown=(componentName)=>{
    const installName=componentName.replace(/([A-Z])/g,"-$1").toLowerCase().substr(1);
    return `
    ## 支持环境
    * React 16.X以上(支持Hooks)
    * ESmodule (webpack)
    
    ## 安装

    使用 npm 或 cnpm 安装

    ><span style="color:red">请确保您能连接到局域网</span>

    <div style="color:#314659;background:#f2f4f5;padding:10px ">  npm --registry ${config.npmHost}  install ${installName} --save</div>

    ##  使用
    <div style="color:#314659;background:#f2f4f5;padding:10px "> 

    <p> <span style="color:#af2af1">import</span> <span>&nbsp;React,{Component} from 'react'</span> </p>

    <p> <span style="color:#af2af1">import</span> <span style="color:red"> &nbsp;${componentName}</span> <span>&nbsp;from '${installName}'</span> </p>

    export default class App extends Component(){

            render(){
                
                return(

                    <${componentName}/>
                    
                )
            }
    }
    </div>


    `

}