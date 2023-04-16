import React, { ReactNode, HTMLProps } from 'react';

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H4: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  const classNames = `text-lg font-bold" ${className}`;
  return (
    <h4 className={classNames} {...otherProps}>{children}</h4>
  );
};

export default H4;