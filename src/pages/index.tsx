import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div style={{ position: 'relative' }}>
      <h1 className={styles.title}>Page index</h1>
      <button color="blue">Click Me</button>
      <div style={{ position: 'absolute' }}>
        <a href="localhost:8000/about"> About </a>
      </div>
    </div>
  );
};
