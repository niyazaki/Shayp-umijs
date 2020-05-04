import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '600px',
        height: '500px ',
      }}
    >
      <h1 className={styles.title}>Shayp UmiJs</h1>
      <form>
        <label>
          Name :
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div
        style={{
          position: 'absolute',
          bottom: '5px',
        }}
      >
        <h3>
          <a href="about"> About </a>
        </h3>
      </div>
    </div>
  );
};
