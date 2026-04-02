import Link from 'next/link';
import type { Route } from 'next';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  className?: string;
};

type LinkProps = BaseProps & {
  as: 'link';
  href: Route;
};

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

type Props = LinkProps | NativeButtonProps;

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }: Props) {
  const classes = `${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className}`.trim();

  if (props.as === 'link') {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
