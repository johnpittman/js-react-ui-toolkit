import React, { ReactNode, useEffect, useState } from 'react';

import LoadingIndicator from '>/components/loaders/LoadingIndicator';

import styles from './style.module.css';

export interface ButtonProps {
  id?: any;
  async?: boolean; // button will show spinner as soon as it is clicked
  className?: string;
  theme?: null | '1' | '2' | '3';
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean; // controls when to hide the spinner and reenable the button
  label?: string;
  layoutDirection?: 'rtl';
  variant: 'outlined' | 'text';
  floating?: boolean;
  transparent?: boolean;
  type?: string;
  shape?: 'circle';
  onClick?: any;
  p;
}

function Button(props: ButtonProps) {
  let [loading, setIsLoading] = useState(props.loading);
  let baseClassName = styles.Button;
  let className = styles.Button;
  let disabled = props.disabled || loading;

  if (props.layoutDirection === 'rtl') {
    className += ` ${baseClassName}-layout--rtl`;
  }

  if (props.variant) {
    className += ` ${baseClassName}-type-${props.variant}`;

    if (props.disabled || loading) {
      className += ` ${baseClassName}-type-${props.variant}--disabled`;
    } else if (props.theme) {
      className += ` ${baseClassName}-type-${props.variant}--theme-${props.theme}`;
    }
  } else if (props.disabled || loading) {
    className += ` ${baseClassName}--disabled`;
  } else if (props.theme) {
    className += ` ${styles[`ButtonTheme${props.theme}`]}`;
  }

  if (props.transparent) {
    className += ` ${baseClassName}--transparent`;
  }

  if (props.floating) {
    className += ` ${baseClassName}--floating`;
  }

  if (props.shape) {
    className += ` ${baseClassName}--${props.shape}`;
  }

  if (props.className) {
    className += ` ${props.className}`;
  }

  let icon = loading ? <LoadingIndicator /> : props.icon;

  let handleClick = (event: any) => {
    if (props.async) {
      setIsLoading(true);

      if (props.onClick) {
        props.onClick(event, props);
      }
    } else if (props.onClick) {
      props.onClick(event, props);
    }
  };

  useEffect(() => {
    setIsLoading(props.loading);
  }, [props.loading]);

  // adding floating to button causes error in console on render
  return (
    <button className={className} type="button" disabled={disabled} data-theme={props.theme} onClick={handleClick}>
      {icon}
      {props.label && icon && <div className={`${baseClassName}__icon-spacer`} />}
      {props.label}
    </button>
  );
}

export default Button;
