import React,{useState,useCallback,useRef} from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog , Form ,Input ,Radio} from '@alifd/next';
import styles from './index.module.scss';
const FormItem = Form.Item;
//无状态表单验证
export default function DialogEditRule() {
  const [fullyCustomizedVisible,setFullyCustomizedVisible]=useState(true)
  const onCloseFullyCustomized=useCallback(()=>{
    setFullyCustomizedVisible(false);
  })
  const submitBtn=useRef(null);//对话框确定按钮触发表单提交
  const footer =useRef(<div>
                <Button  type="normal" size="medium" onClick={onCloseFullyCustomized}>取消</Button>
                <Button style={{marginLeft:10}}  type="primary" size="medium" onClick={()=>{submitBtn.current.handleClick()}}>确定</Button>
              </div>)
  
  const validateForm=(val,err)=>{
    console.log(val)
  }
  // const validatorRule=(rule,val)=>{
  //   console.log(rule,val)
  // }
  return (
       <Dialog
          title={<div className={styles.title}>标签规则编辑</div>}
          footer={footer.current}
          visible={fullyCustomizedVisible}
          onOk={onCloseFullyCustomized}
          shouldUpdatePosition
          onClose={()=>{
            setFullyCustomizedVisible(false)
          }}>
          <div className={styles.content}>
            {/*  无状态表单组件 自定义校验文档 https://fusion.design/component/basic/form*/}
            <Form labelCol={{span:4}} >
              <FormItem label="标签规则名称" hasFeedback required requiredTrigger="onBlur"  requiredMessage="请输入标签生成规则">
                <Input  name="ruleName" placeholder="请输入规则名称"/>
              </FormItem>
              <FormItem label="生成方式" hasFeedback required  requiredMessage="请选择生成方式">
              <Radio.Group name="genMethod" >
                        <Radio value="1">条件1</Radio>
                        <Radio value="2">条件2</Radio>
              </Radio.Group>
              </FormItem>
              {/* 静态配置 */}
              <FormItem label="自定义验证状态" hasFeedback required  validateState="error" help="自定义验证状态" >
              <Input  name="genRule" placeholder="请输入规则名称"/>
              </FormItem>
              <FormItem wrapperCol={{ offset: 6 }}  >
                    <Form.Submit validate type="primary" ref={submitBtn} onClick={validateForm} style={{opacity:0}}>Submit</Form.Submit>
                </FormItem>
            </Form>
          </div>
      </Dialog>
  );
}

DialogEditRule.propTypes = {
  value: PropTypes.string,
};

DialogEditRule.defaultProps = {
  value: 'string data',
};
