import React, { useState } from "react"
import { Table, Button } from "@alifd/next"
import styles from "./index.module.scss"

export default ({ nodes }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "购房发票"
    },
    {
      id: 2,
      title: "购房合同"
    },
    {
      id: 3,
      title: "授权委托书"
    },
    {
      id: 4,
      title: "直系亲属关系证明"
    },
    {
      id: 5,
      title: "代办人身份证"
    },
    {
      id: 6,
      title: "借款合同"
    },
    {
      id: 7,
      title: "不动产权证"
    },
    {
      id: 8,
      title: "贷款结清凭证"
    },
    {
      id: 9,
      title: "契税完税凭证"
    },
    {
      id: 10,
      title: "还款明细"
    },
    {
      id: 11,
      title: "借记卡或借记卡号"
    },
    {
      id: 12,
      title: "身份证"
    }
  ])

  const handleOnChange = key => {
    console.log(key)
  }
  const handleRowSelection = {
    onChange: handleOnChange,
    selectedRowKeys: nodes,
    getProps: record => {
      return {
        // disabled: record.id === nodes[0] || record.id === nodes[1]
      }
    }
  }
  return (
    <div className={styles.rgContent}>
      选择提交材料:
      <Button.Group style={{ float: "right" }}>
        <Button type="primary">基础材料</Button>
        <Button type="secondary">基础表单</Button>
      </Button.Group>
      <Table
        dataSource={data}
        style={{ marginTop: 20 }}
        rowSelection={handleRowSelection}
      >
        <Table.Column title="序号" dataIndex="id" />
        <Table.Column title="材料名称" dataIndex="title" />
      </Table>
    </div>
  )
}
