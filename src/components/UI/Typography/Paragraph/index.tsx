import React, { ReactNode, HTMLProps } from 'react';

interface ParagraphProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const P: React.FC<ParagraphProps> = ({ children, className, ...otherProps }) => {
  const classNames = `text-base ${className}`;
  return (
    <p className={classNames} {...otherProps}>{children}</p>
  );
};

export default P;