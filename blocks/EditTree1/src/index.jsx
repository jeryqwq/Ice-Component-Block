import React, { useState } from "react"
import {Tree,Icon,Tab,Dialog,Button} from '@alifd/next'
import styles from './index.module.scss';
import Content from './content'
const TreeNode = Tree.Node;

export default function() {
  const [visible,setVisible] =useState(true);
  const [treeData, setTreeDate] = useState([{
    key: 1,
    label: '申报配置',
    tool:{add:"新增情形"},//节点操作权限，可根据具体的数据渲染指定的权限
    children: [{
      key: 11,
      label: '股东属于那种类型',
      tool:{add:"新增子节点",del:1,up:1,down:1},
      children: [{
        key: 111,
        label: '股东为企业',
        tool:{add:"新增子节点",del:1,up:1,down:1},
      }, {
        key: 112,
        label: '股东为事业法人',
        tool:{add:"新增子节点",del:1,up:1,down:1},
      }, {
        key: 113,
        label: '股东为社团法人',
        tool:{add:"新增子节点",del:1,up:1,down:1},

      }, {
        key: 114,
        label: '股东为民办非企业单位',
        tool:{add:"新增子节点",del:1,up:1,down:1},

      }, {
        key: 115,
        label: '股东为自然人',
        tool:{add:"新增子节点",del:1,up:1,down:1},
      }]
    },{
      key:12,
      label:"住所属于那种情况",
      tool:{add:"新增子节点",del:1,up:1,down:1},
      children:[
        {
          key:121,
          label:"股东或发起人自由房产作为住所",
        tool:{add:"新增子节点",del:1,up:1,down:1},
        },{
          key:122,
          label:'租聘房屋作为住所',
        tool:{add:"新增子节点",del:1,up:1,down:1},
        }
      ]
    },{
      key:13,
      label:'是否涉及企业名称预先核准',
      tool:{add:"新增子节点",del:1,up:1,down:1},
      children:[
        {
          key:131,
          label:"涉及企业名称预先核准",
        tool:{add:"新增子节点",del:1,up:1,down:1},

        },{
          key:132,
          label:'租聘房屋作为住所',
        tool:{add:"新增子节点",del:1,up:1,down:1},

        }
      ]
    },{
      key:14,
      label:"是否属于因公司合并申请设立登记",
      tool:{add:"新增子节点",del:1,up:1,down:1},
      children:[
        {
          key:141,
          label:"属于因公司合并申请设立登记",
        tool:{add:"新增子节点",del:1,up:1,down:1},
        },
        {
          key:142,
          label:"不属于因公司合并申请设立登记",
        tool:{add:"新增子节点",del:1,up:1,down:1},
        }
      ]
    }]
  }])
  const [i,setI]=useState(0)
  //异步加载请参照文档https://fusion.design/component/basic/tree
  const handleSelect = args => {
    console.log("select", args) //选中项key值
  }
  const handleEditTreeItem = event => {}
  const editFinishHandle = (key, label, node) => {
    //节点编辑状态
    console.log(key, label, node) //修改节点重新渲染
  }
  const addItem=(item)=>{//新增节点
    !item.children&&(item.children=[]);
    const label=prompt("请输入添加的情形名称", "");
    if(label){
      item.children.push({
        key:Math.random(),
        label:label,
        tool:{add:"新增子节点",del:1,up:1,down:1},
        children:[]
      });
      setI(i+1);
    }
  }
  const delItem=(item,parent)=>{//删除节点
    parent.splice(parent.indexOf(item),1);
    setI(i+1);
  }
  const upItem=(item,parent)=>{//上移
    const index=parent.indexOf(item);
    if(index!=-1&&index!=0){//存在且不等于0
      const cur=parent[index-1];
      parent[index-1]=item;
      parent[index]=cur;
      setI(i+1);
    }
  }
  const downItem=(item,parent)=>{//下移
    const index=parent.indexOf(item);
    if(index!=-1&&index!=parent.length-1){//存在且不等于0
      const cur=parent[index+1];
      parent[index+1]=item;
      parent[index]=cur;
      setI(i+1);
    }
  }
  const renderTreeItem = (item,tree) => {
    //渲染树型功能按钮
    return (
      <div className={styles.treeWrap}>
        <span>{item.label}</span>
        <span className={styles.treeItemIcon} showflag="true">
          {item.tool&&item.tool.add&&<span style={{marginLeft:15}} onClick={()=>addItem(item)}><Icon type="add" size="xs"  />{item.tool.add}</span>}
          {/* <Icon type="edit" size="xs" onClick={handleEditTreeItem} /> */}
          {item.tool&&item.tool.del&&<span style={{marginLeft:15}} onClick={()=>delItem(item,tree)}><Icon type="ashbin" size="xs" />删除情形</span>}
          {item.tool&&item.tool.up&&<span style={{marginLeft:15}} onClick={()=>upItem(item,tree)}><Icon type="arrow-up" size="xs" />上移</span>}
          {item.tool&&item.tool.down&&<span style={{marginLeft:15}} onClick={()=>downItem(item,tree)} ><Icon type="arrow-down" size="xs" />下移</span>}
        </span>
      </div>
    )
  }
  const tabs = [
    { tab: '条件配置', key: 'home', content: 'This is home page' },
    { tab: '材料配置', key: 'doc', content: 'This is document page' },
    { tab: '表单配置', key: 'api', content: 'This is api page' },
    { tab: '情形配置', key: 'repo', content: 'This ia repo link' }
];
  const handleOnchange=(key)=>{

  }
  return (
      <Dialog
      title="事项配置：医疗机构设置（内资）审批"
      onClose={()=>setVisible(false)}
      footer={<span><Button  type="normal" onClick={()=>{setVisible(false)}}>取消</Button><Button style={{marginLeft:10}}  type="primary" onClick={()=>{setVisible(false)}}>确定</Button></span>}
      visible={visible}
      >
      <Tab shape="wrapped" onChange={handleOnchange} style={{width:1100}}>
        {
            tabs.map(tab => <Tab.Item title={tab.tab} key={tab.key}></Tab.Item>)
        }
      </Tab>
      <div className={styles.TableMixTree}>
        <div className={styles.layoutLeft}>
          {/* 节点有添加其他功能键，自己定义渲染的内容 */}
            <Tree
            draggable
            defaultExpandAll
            isLabelBlock
            multiple={false}
            onEditFinish={editFinishHandle}
            isNodeBlock={{ defaultPaddingLeft: 10 }}
            onSelect={handleSelect}
          >
            {(function renderTree(tree) {
              return tree.map(item => {
                if (item.children) {
                  return (
                    <TreeNode label={renderTreeItem(item,tree)} key={item.key}>
                      {renderTree(item.children)}
                    </TreeNode>
                  )
                } else {
                  return <TreeNode label={renderTreeItem(item,tree)} key={item.key} />
                }
              })
            })(treeData)}
          </Tree>
        </div>
        <div className={styles.layoutRight}>
            <Content  nodes={[parseInt(Math.random()*5),parseInt(Math.random()*5)]}/>
        </div>
      </div>
    </Dialog>   
   
  )
}
