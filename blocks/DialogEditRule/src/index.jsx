import React,{useState,useCallback,useRef} from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog } from '@alifd/next';

import styles from './index.module.scss';

export default function DialogEditRule({ value }) {
  const [fullyCustomizedVisible,setFullyCustomizedVisible]=useState(true)
  const onCloseFullyCustomized=useCallback(()=>{
    setFullyCustomizedVisible(false);
  })
  const footer =useRef(<div>
                <Button  type="normal" size="medium" onClick={onCloseFullyCustomized}>取消</Button>
                <Button style={{marginLeft:10}}  type="primary" size="medium" onClick={onCloseFullyCustomized}>确定</Button>
              </div>)
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
