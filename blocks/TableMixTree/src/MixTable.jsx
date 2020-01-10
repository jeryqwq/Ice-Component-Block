import React, { useRef ,useState} from "react"
import { Table, Button, Input, Icon, Pagination } from "@alifd/next"
import styles from "./index.module.scss"

export default function() {
  const [loading,setLoadding]=useState(true);
  setTimeout(() => {
    setLoadding(false);
  }, 1000);
  const data = [
    {
      key: 1,
      name: "a",
      age: 32,
      address: "aa"
    },
    {
      key: 2,
      name: "i",
      age: 30,
      address: "ii"
    },
    {
      key: 3,
      name: "i",
      age: 32,
      address: "ii"
    },
    {
      key: 4,
      name: "i",
      age: 32,
      address: "ii"
    }
  ]
  function renderAction(value, index, record) {
    console.log("表格操作 ", value, index)
    return (
      <>
        <Button type="primary" text>
          修改
        </Button>{" "}
        &nbsp;&nbsp;
        <Button type="primary" text disabled>
          发布
        </Button>{" "}
        &nbsp;&nbsp;
        <Button type="primary" text>
          洞察
        </Button>{" "}
        &nbsp;&nbsp;
      </>
    )
  }
  const onFilter = args => {
    //过滤后事件
    console.log("数据过滤触发事件，此处根据args过滤改变数据源", args)
  }
  const onPageChange = args => {
    console.log("页码信息改变", args)
  }
  const handlePageSizeChange = args => {
    console.log("页码大小改变", args)
  }
  const filters = useRef([
    //数据过滤规则
    {
      label: "筛选条件1",
      value: "type1"
    },
    {
      label: "筛选条件2",
      value: "type2"
    },
    {
      label: "筛选条件3",
      value: "type3"
    },
    {
      label: "筛选条件4",
      value: "type4"
    }
  ])
  function openTable(item) {
    console.log(item)
    return (
      <div className={styles.openTable}>
        <div className={styles.openTitle}>标签规则</div>
        <div className={styles.openTitle}>
          <span className="item">规则名称：错号_00000000</span>
          <span className="item">生成条件：条件</span>
          <span className="item">状态：<span className={styles.successStatus}></span>已使用</span>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.tableWrap}>
      <div className={styles.toolBtn}>
        <Button type="primary">
          <Icon type="add" />
          新增洞察
        </Button>
        <Input
          placeholder="请输入标签名称…"
          style={{ float: "right" }}
          innerAfter={<Icon type="search" size="xs" style={{ margin: 4 }} />}
          aria-label="Medium"
        />
        &nbsp;&nbsp;
        <Button>
          <Icon type="atm" /> 发布
        </Button>{" "}
        &nbsp;&nbsp;
        <Button>
          <Icon type="atm" /> 下线
        </Button>{" "}
        &nbsp;&nbsp;
        <Button>
          <Icon type="atm" /> 导入标签
        </Button>
      </div>
      <Table
        dataSource={data}
        primaryKey="key"
        hasBorder={false}
        loading={loading}
        onFilter={onFilter}
        expandedRowRender={openTable}
        rowSelection={{ onChange: () => {} }}
      >
        <Table.Column title="标签名称" dataIndex="key" />
        <Table.Column title="所属分类" dataIndex="name" />
        <Table.Column title="标签类型" dataIndex="age" />
        <Table.Column title="存储类型" dataIndex="address" />
        <Table.Column title="更新周期" dataIndex="key" />
        <Table.Column
          title="是否匹配规则"
          dataIndex="age"
          filters={filters.current}
          cell={statusOutputRule}
        />
        <Table.Column
          title="状态"
          dataIndex="age"
          cell={statusOutput}
          filters={filters.current}
        />
        <Table.Column title="操作" cell={renderAction} />
      </Table>
      <div className={styles.pageWrap}>
        <Pagination
          total={2514}
          onChange={onPageChange}
          size="medium"
          pageSizeSelector="dropdown"
          pageSizePosition="end"
          onPageSizeChange={handlePageSizeChange}
          totalRender={total => (
            <span className={styles.pageTotal}>{`共计: ${total}条`}</span>
          )}
        />
      </div>
    </div>
  )
}
function statusOutputRule(key) {
  if (key == "32") {
    return <span className={styles.errStatus}>否</span>
  } else {
    return <span className={styles.successStatus}>是</span>
  }
}
function statusOutput(key) {
  if (key == "32") {
    return <span className={styles.errStatus}>待发布</span>
  } else {
    return <span className={styles.successStatus}>已发布</span>
  }
}
