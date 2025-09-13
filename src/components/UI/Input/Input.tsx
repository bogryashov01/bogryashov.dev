import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'search';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', size = 'md', icon, iconPosition = 'left', ...props }, ref) => {
    return (
      <div className={cn(styles.inputWrapper, styles[variant], styles[size], className)}>
        {icon && iconPosition === 'left' && <div className={styles.inputIcon}>{icon}</div>}
        <input ref={ref} className={cn(styles.input, icon && styles.inputWithIcon)} {...props} />
        {icon && iconPosition === 'right' && <div className={styles.inputIcon}>{icon}</div>}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
