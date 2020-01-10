import React, { useState, useEffect } from "react"
import {Tree,Icon} from '@alifd/next'
import styles from './index.module.scss';

const TreeNode = Tree.Node;

export default function() {
  const [treeData, setTreeDate] = useState([])
  //异步加载请参照文档https://fusion.design/component/basic/tree
  useEffect(() => {
    setTimeout(() => {
      setTreeDate([
        {
          key: "label1",
          label: "我的标签",
          children: [
            {
              key: "label1-1",
              label: "人",
              children: [
                {
                  label: "用户自然属性",
                  key: "label1-1-1",
                  children: [
                    {
                      label: "基本情况",
                      key: "label1-1-1-1"
                    },
                    {
                      label: "健康情况",
                      key: "label1-1-1-2"
                    },
                    {
                      label: "特长技能",
                      key: "label1-1-1-3"
                    }
                  ]
                },
                {
                  label: "用户社会属性",
                  key: "label1-1-2"
                }
              ]
            },
            {
              key: "label2-2",
              label: "事",
              children: [
                {
                  label: "用户自然属性",
                  key: "label2-1-1",
                  children: [
                    {
                      label: "基本情况",
                      key: "label2-1-1-1"
                    },
                    {
                      label: "健康情况",
                      key: "label2-1-1-2"
                    },
                    {
                      label: "特长技能",
                      key: "label2-1-1-3"
                    }
                  ]
                },
                {
                  label: "用户社会属性",
                  key: "label2-1-2"
                }
              ]
            },
            {
              key: "label3-3",
              label: "地",
              children: [
                {
                  label: "用户自然属性",
                  key: "label3-1-1",
                  children: [
                    {
                      label: "基本情况",
                      key: "label3-1-1-1"
                    },
                    {
                      label: "健康情况",
                      key: "label3-1-1-2"
                    },
                    {
                      label: "特长技能",
                      key: "label3-1-1-3"
                    }
                  ]
                },
                {
                  label: "用户社会属性",
                  key: "label3-1-2"
                }
              ]
            },
            {
              key: "label4-4",
              label: "物",
              children: [
                {
                  label: "用户自然属性",
                  key: "label4-1-1",
                  children: [
                    {
                      label: "基本情况",
                      key: "label4-1-1-1"
                    },
                    {
                      label: "健康情况",
                      key: "label4-1-1-2"
                    },
                    {
                      label: "特长技能",
                      key: "label4-1-1-3"
                    }
                  ]
                },
                {
                  label: "用户社会属性",
                  key: "label4-1-2"
                }
              ]
            }
          ]
        }
      ])
    }, 1000)
  }, [])
  const handleSelect = args => {
    console.log("select", args) //选中项key值
  }
  const handleEditTreeItem = event => {}
  const editFinishHandle = (key, label, node) => {
    //节点编辑状态
    console.log(key, label, node) //修改节点重新渲染
  }
  const renderTreeItem = item => {
    //渲染树型功能按钮
    return (
      <div className={styles.treeWrap}>
        <span>{item.label}</span>
        <span className={styles.treeItemIcon} showflag="true">
          <Icon type="add" size="xs" />
          <Icon type="edit" size="xs" onClick={handleEditTreeItem} />
          <Icon type="ashbin" size="xs" />
        </span>
      </div>
    )
  }
  return (
    <Tree
      defaultExpandAll
      isLabelBlock
      isNodeBlock
      onEditFinish={editFinishHandle}
      isNodeBlock={{ defaultPaddingLeft: 30 }}
      onSelect={handleSelect}
    >
      {(function renderTree(tree) {
        return tree.map(item => {
          if (item.children) {
            return (
              <TreeNode label={renderTreeItem(item)} key={item.key}>
                {renderTree(item.children)}
              </TreeNode>
            )
          } else {
            return <TreeNode label={renderTreeItem(item)} key={item.key} />
          }
        })
      })(treeData)}
    </Tree>
  )
}
