import React from 'react';

import styles from './style.module.css';

export interface TagProps {
  className?: string;
  label?: string;
  accentBar?: boolean;
}

function Tag(props: TagProps) {
  return (
    <div className={`${styles.tag} ${props.className || ''}`}>
      {props.accentBar && <div className={styles.tagAccentBar} />}
      {props.label && <span className={styles.tagLabel}>{props.label}</span>}
    </div>
  );
}

export default Tag;
