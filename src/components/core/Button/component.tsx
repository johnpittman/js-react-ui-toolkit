import React from 'react';

import styles from './style.module.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className={styles.Button}>
      <span className={styles.ButtonLabel}>awefwe</span>
      <span>icon2</span>
      {props.label}
    </div>
  );
};

export default Button;
