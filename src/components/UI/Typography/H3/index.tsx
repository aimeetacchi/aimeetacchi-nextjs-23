import React, { ReactNode, HTMLProps } from 'react';

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H3: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  const classProps = className ? className : '';
  const classNames = `text-2xl font-bold ${classProps}`;
  return (
    <h3 className={classNames} {...otherProps}>{children}</h3>
  );
};

export default H3;