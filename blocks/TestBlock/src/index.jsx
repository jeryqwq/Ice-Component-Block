import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function TestBlock({ value }) {
  return (
    <div className={styles.TestBlock}>
      TestBlock {value}
    </div>
  );
}

TestBlock.propTypes = {
  value: PropTypes.string,
};

TestBlock.defaultProps = {
  value: 'string data',
};
