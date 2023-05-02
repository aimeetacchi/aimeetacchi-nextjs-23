import React, { ReactNode, HTMLProps } from 'react';

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const P: React.FC<ParagraphProps> = ({ children, className, ...otherProps }) => {
  const classProps = className ? className : '';
  const classNames = `text-base ${classProps}`;
  return (
    <p className={classNames} {...otherProps}>{children}</p>
  );
};

export default P;