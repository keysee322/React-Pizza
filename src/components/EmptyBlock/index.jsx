import React from 'react';

import styles from './EmptyBlock.module.scss';

const EmptyBlock = () => {
  return (
    <div className={styles.root}>
      <h1>404</h1>
      <h2 className={styles.comment}>Ничего не найдено</h2>
    </div>
  );
};

export default EmptyBlock;
