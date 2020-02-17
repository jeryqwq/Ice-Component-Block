import React, { useRef,useState } from "react"
import PropTypes from "prop-types"
import { Button, Form, Input, Radio,Grid,Select,Table,Pagination,Icon } from "@alifd/next"

import styles from "./index.module.scss"
const {Row, Col} = Grid;

const FormItem = Form.Item

export default function InformationTable({ value }) {
  const [loadding,setLoadding]=useState(true);
  setTimeout(() => {//解除动画
    setLoadding(()=>false);
  }, 1000);
  const dataSource = [//数据源
    {id: 1, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2017-09-10 12:10',status:0},
    {id: 2, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 3, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 4, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 5, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
    {id: 6, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:1},
    {id: 7, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:1},
    {id: 8, theme: '90后',detail:"重点人员洞察",updateuser:"chen",time:'2018-09-10 12:10',status:0},
  ];
  const onPageChange=(args)=>{
    console.log("pageChange",args);
  }
  const handlePageSizeChange=(size)=>{
    console.log("handlePageSizeChange:size=",size);
  }
  const validateForm = (val, err) => {
    console.log(val)
  }
  const submitBtn = useRef(null) //对话框确定按钮触发表单提交
  return (
    <div className={styles.InformationTable}>
      <h3 className={styles.title}>基本信息</h3>
      <Row gutter="4">
        <Col>
          <Form labelCol={{ span: 4 }}>
            <FormItem
              label="标签规则名称"
              hasFeedback
              required
              requiredTrigger="onBlur"
              requiredMessage="请输入标签生成规则"
            >
              <Input name="ruleName" placeholder="请输入规则名称" />
            </FormItem>
            <FormItem
              label="生成方式"
              hasFeedback
              required
              requiredMessage="请选择生成方式"
            >
              <Radio.Group name="genMethod">
                <Radio value="1">条件1</Radio>
                <Radio value="2">条件2</Radio>
              </Radio.Group>
            </FormItem>
            {/* 静态配置 */}
            <FormItem
              label="自定义验证状态"
              hasFeedback
              required
              validateState="error"
              help="可根据函数自定义验证状态"
            >
              <Input name="genRule" placeholder="请输入规则名称" />
            </FormItem>
         
            <FormItem
              label="生成方式"
              hasFeedback
              required
              requiredMessage="信息资源分类"
            >
              <Input.Group  addonAfter={<Button type="primary">选择</Button>}>
                  <Input hasClear style={{width: '100%'}} aria-label="please input" />
              </Input.Group>
            </FormItem>
    
          </Form>
        </Col>
        <Col>
          <Form labelCol={{ span: 4 }}>
            <FormItem
              label="标签规则名称"
              hasFeedback
              required
              requiredTrigger="onBlur"
              requiredMessage="请输入标签生成规则"
            >
              <Input name="ruleName" placeholder="请输入规则名称" />
            </FormItem>
            <FormItem
              label="生成方式"
              hasFeedback
              required
              requiredMessage="请选择生成方式"
            >
              <Radio.Group name="genMethod">
                <Radio value="1">条件1</Radio>
                <Radio value="2">条件2</Radio>
              </Radio.Group>
            </FormItem>
            {/* 静态配置 */}
            <FormItem
              label="自定义验证状态"
              hasFeedback
              required
              validateState="error"
              help="可根据函数自定义验证状态"
            >
              <Input name="genRule" placeholder="请输入规则名称" />
            </FormItem>
            <FormItem
              label="信息资源格式"
              hasFeedback
              required
              requiredMessage="信息资源分类"
            >
             <Select  onChange={(val)=>{}} onBlur={(val)=>{}}  defaultValue="jack" showSearch hasClear>
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="frank">Frank</Select.Option>
                <Select.Option value="hugo">Hugo</Select.Option>
            </Select>
            </FormItem>
          </Form>
        </Col>
      </Row>
      <h3 className={styles.title}>信息项</h3>
      <Button type="primary"  ><Icon type="add" />新增</Button>&nbsp;&nbsp;
      <Button   ><Icon type="ashbin" />删除</Button>&nbsp;&nbsp;
      <Button   ><Icon type="add" />操作3</Button>&nbsp;&nbsp;
      <Button  ><Icon type="add" />操作34</Button>

      <Table dataSource={dataSource}
      loading={loadding}
      style={{marginTop:10}}
      hasBorder={false}
      rowSelection={{ onChange: () => {} }}
      >
          <Table.Column title="序列" dataIndex="id"/>
          <Table.Column title="洞察主题" dataIndex="theme"/>
          <Table.Column title="简介" dataIndex="detail"/>
          <Table.Column title="更新用户" dataIndex="updateuser"/>
          <Table.Column title="更新时间" dataIndex="time" />
          <Table.Column title="状态" dataIndex="status" />
          <Table.Column title="操作" cell={()=><div>
            <Button  type="primary"  text>编辑</Button>&nbsp;&nbsp;
            <Button  type="primary"  text>删除</Button>
          </div>} />
      </Table>
      <div className={styles.pageWrap}>
      <Pagination
          total={2514}
          onChange={()=>{}}
          size="medium"
          // pageSizeSelector="dropdown"
          pageSizePosition="end"
          onPageSizeChange={()=>{}}
          style={{marginTop:30}}
          totalRender={total => (
            <span className={styles.pageTotal}>{`共计: ${total}条`}</span>
          )}
        />
      </div>
      
    </div>
  )
}

InformationTable.propTypes = {
  value: PropTypes.string
}

InformationTable.defaultProps = {
  value: "string data"
}
