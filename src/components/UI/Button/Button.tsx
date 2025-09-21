import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button';
  href?: never;
  children: React.ReactNode;
}

interface ButtonAsLinkProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
  as: 'link';
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, as = 'button', ...props }, ref) => {
    const buttonClasses = cn(styles.button, styles[variant], styles[size], className);

    if (as === 'link') {
      const { href, external, ...linkProps } = props as ButtonAsLinkProps;

      if (external) {
        return (
          <a
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonClasses, 'external-link')}
            {...linkProps}>
            {children}
          </a>
        );
      }

      return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Link
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href as any}
          className={cn(buttonClasses, 'button-link')}
          {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as React.ForwardedRef<HTMLButtonElement>} className={buttonClasses} {...(props as ButtonAsButtonProps)}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
