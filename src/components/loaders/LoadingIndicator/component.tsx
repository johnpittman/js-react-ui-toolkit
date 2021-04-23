import React from 'react';

import styles from './style.module.css';

export interface LoadingIndicatorProps {
  className?: string;
}

function LoadingIndicator(props: LoadingIndicatorProps) {
  let className = styles.LoadingIndicator;

  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <svg className={className} fill="none" viewBox="0 0 20 20">
      <path
        fill="currentColor"
        d="M10 1c0-.552.449-1.005.998-.95a10 10 0 11-8.74 3.62c.35-.427.988-.424 1.378-.034.39.39.385 1.02.046 1.457a8 8 0 107.315-3.03C10.45 1.992 10 1.552 10 1z"
      />
    </svg>
  );
}

export default LoadingIndicator;
