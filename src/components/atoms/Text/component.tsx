import React from 'react';

import styles from './style.module.css';

export enum TextSize {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'x'
}

export enum TextType {
  Bold = 'b',
  Deleted = 'del',
  Emphasized = 'em',
  Inserted = 'ins',
  Italic = 'i',
  Label = 'label',
  P = 'p',
  Span = 'strong',
  Strong = 'strong',
  Subscript = 'sub',
  Superscript = 'sup'
}

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  type?: TextType;
  caps?: boolean;
}

function Text(props: TextProps) {
  let { type = TextType.Span, ...rest } = props;
  let className = styles.Text;

  if (props.className) {
    className += ` ${props.className}`;
  }

  if (props.caps) {
    className += ` ${styles['Text--caps']}`;
  }

  let processedProps = {
    className,
    ...rest
  };

  return React.createElement(type, processedProps, props.children);
}

export default Text;
