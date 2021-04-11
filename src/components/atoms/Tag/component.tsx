import React from 'react';

import styles from './style.module.css';

export interface TagProps {
  className?: string;
  label?: string;
  accentBar?: boolean;
}

function Tag(props: TagProps) {
  return (
    <div className={`${styles.Tag} ${props.className || ''}`}>
      {props.accentBar && <div className={styles.TagBar} />}
      {props.label && <span className={styles.TagLabel}>{props.label}</span>}
    </div>
  );
}

export default Tag;
