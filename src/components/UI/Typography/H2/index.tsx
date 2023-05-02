import React, { ReactNode, HTMLProps } from 'react';

interface HeadingProps extends HTMLProps<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

const H2: React.FC<HeadingProps> = ({ children, className, ...otherProps }) => {
  const classProps = className ? className : '';
  const classNames = `text-4xl font-oswald700sans font-bold ${classProps}`;
  return (
    <h2 className={classNames} {...otherProps}>{children}</h2>
  );
};

export default H2;