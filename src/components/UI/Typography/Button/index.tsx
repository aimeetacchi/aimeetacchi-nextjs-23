import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import { ButtonStyles } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...otherProps }) => {
  const classNames = `md:w-auto p-3 mt-4 text-base font-opensans400sans ${className ? className: ''}`;
  return (
    <ButtonStyles className={classNames} {...otherProps}>{children}</ButtonStyles>
  );
};

export default Button;