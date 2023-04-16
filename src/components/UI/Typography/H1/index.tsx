import React, { ReactNode, HTMLProps } from 'react';

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H1: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  const classNames = `text-5xl font-oswald700sans" ${className}`;
  return (
    <h1 className={classNames} {...otherProps}>{children}</h1>
  );
};

export default H1;