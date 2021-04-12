import React from 'react';

import styles from './style.module.css';

export interface TagProps {
  className?: string;
  label?: string;
  accentBar?: boolean;
}

function Tag(props: TagProps) {
  let className = styles.Tag;

  if (className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      {props.accentBar && <div className={styles.TagBar} />}
      {props.label && <span className={styles.TagLabel}>{props.label}</span>}
    </div>
  );
}

export default Tag;
