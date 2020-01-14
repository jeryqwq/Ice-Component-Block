import React, { useState, useRef } from "react"
import { Tree, Icon, Tab, Dialog, Button } from "@alifd/next"
import styles from "./index.module.scss"
import Content from "./content"
const TreeNode = Tree.Node

export default function() {
  const [visible, setVisible] = useState(true)
  const [treeData, setTreeDate] = useState([
    {
      key: 1,
      label: "1. 申请人配偶、父母、子女参与提取情况",
      children: [
        {
          key: 11,
          label: "配偶参与提取的"
        },
        {
          key: 12,
          label: "父母、子女参与提取的",
          tool: { add: "新增子节点", del: 1, up: 1, down: 1 }
        }
      ]
    },
    {
      key: 2,
      label: "2. 委托办理情况",
      children: [
        {
          key: 21,
          label: "本人办理"
        },
        {
          key: 22,
          label: "委托代理人办理"
        }
      ]
    },
    {
      key: 3,
      label: "3. 贷款偿还情况",
      children: [
        {
          key: 31,
          label: "还贷期间提取"
        },
        {
          key: 32,
          label: "贷款结清提取"
        }
      ]
    },
    {
      key: 4,
      label: "4. 房屋性质",
      children: [
        {
          key: 41,
          label: "期房"
        },
        {
          key: 42,
          label: "现房"
        }
      ]
    }
  ])
  const curTree = useRef(null)
  const curItem = useRef(null)
  const [i, setI] = useState(0)
  //异步加载请参照文档https://fusion.design/component/basic/tree
  const handleSelect = arg => {
    console.log("select", arg) //选中项key值;
    setI(i + 1)
  }
  const editFinishHandle = (key, label, node) => {
    //节点编辑状态
    console.log(key, label, node) //修改节点重新渲染
  }
  const addItem = item => {
    //新增节点
    !item.children && (item.children = [])
    const label = prompt("请输入添加的情形名称", "")
    if (label) {
      item.children.push({
        key: Math.random(),
        label: label,
        tool: { add: "新增子节点", del: 1, up: 1, down: 1 },
        children: []
      })
      setI(i + 1)
    }
  }
  const delItem = (item, parent) => {
    //删除节点
    parent.splice(parent.indexOf(item), 1)
    setI(i + 1)
  }
  const upItem = (item, parent) => {
    //上移
    const index = parent.indexOf(item)
    if (index != -1 && index != 0) {
      //存在且不等于0
      const cur = parent[index - 1]
      parent[index - 1] = item
      parent[index] = cur
      setI(i + 1)
    }
  }
  const downItem = (item, parent) => {
    //下移
    const index = parent.indexOf(item)
    if (index != -1 && index != parent.length - 1) {
      //存在且不等于0
      const cur = parent[index + 1]
      parent[index + 1] = item
      parent[index] = cur
      setI(i + 1)
    }
  }

  const tabs = [
    { tab: "办件条件配置", key: "home", content: "This is home page" },
    { tab: "提交材料配置", key: "doc", content: "This is document page" },
    { tab: "表单配置", key: "api", content: "This is api page" },
    { tab: "情形引导配置", key: "repo", content: "This ia repo link" },
    { tab: "办理渠道配置", key: "repo2", content: "This ia repo link" }
  ]
  const handleOnchange = key => {}
  const actionAdapter = (e, item, tree) => {
    e.stopPropagation() //阻止事件冒泡
    curItem.current = item
    curTree.current = tree
  }
  return (
    <Dialog
      title="事项配置（偿还购房贷款本息提取住房公积金）"
      onClose={() => setVisible(false)}
      footerAlign="center"
      footer={<span>
          <Button
            type="normal"
            size="large"
            onClick={() => {setVisible(false)}}>
            取消
          </Button>
          <Button
            style={{ marginLeft: 10 }}
            type="primary"
            size="large"
            onClick={() => {
              setVisible(false)
            }}
          >
            确定
          </Button>
        </span>
      }
      visible={visible}
    >
      <Tab
        shape="capsule"
        onChange={handleOnchange}
        style={{ width: '100vw', color: "#5584FF", textAlign: "center" }}
      >
        {tabs.map(tab => (
          <Tab.Item
            title={tab.tab}
            key={tab.key}
            style={{ borderColor: "#5584FF" }}
          ></Tab.Item>
        ))}
      </Tab>
      <div className={styles.TableMixTree}>
        <div className={styles.layoutLeft}>
          {/* 节点有添加其他功能键，自己定义渲染的内容 */}
          <h2 style={{ textAlign: "center" }}>情形配置</h2>
          <Button type="secondary" onClick={() => addItem(curItem.current)}>
            <Icon type="add" size="xs" />
            添加情形
          </Button>
          &nbsp;&nbsp;
          <Button
            type="secondary"
            onClick={() => delItem(curItem.current, curTree.current)}
          >
            <Icon type="ashbin" size="xs" />
            删除情形
          </Button>
          &nbsp;&nbsp;
          <Button
            type="secondary"
            onClick={() => upItem(curItem.current, curTree.current)}
          >
            <Icon type="arrow-up" size="xs" />
            上移
          </Button>
          &nbsp;&nbsp;
          <Button
            type="secondary"
            onClick={() => downItem(curItem.current, curTree.current)}
          >
            <Icon type="arrow-down" size="xs" />
            下移
          </Button>
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
                    <TreeNode
                      label={item.label}
                      key={item.key}
                      onClick={e => actionAdapter(e, item, tree)}
                    >
                      {renderTree(item.children)}
                    </TreeNode>
                  )
                } else {
                  return (
                    <TreeNode
                      label={item.label}
                      key={item.key}
                      onClick={e => actionAdapter(e, item, tree)}
                    />
                  )
                }
              })
            })(treeData)}
          </Tree>
        </div>
        <div className={styles.layoutRight}>
          <Content
            nodes={[parseInt(Math.random() * 12), parseInt(Math.random() * 13), parseInt(Math.random() * 13), parseInt(Math.random() * 13)]}
          />
        </div>
      </div>
    </Dialog>
  )
}
