import { forwardRef, InputHTMLAttributes } from 'react';
import { Input } from '@/components/UI/Input/Input';
import { Icon } from '@/components/UI/Icon/Icon';
import { cn } from '@/lib/utils';
import styles from './Search.module.scss';

interface SearchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Search = forwardRef<HTMLInputElement, SearchProps>(({ className, size = 'md', ...props }, ref) => {
  return (
    <div className={cn(styles.search, className)}>
      <Input
        ref={ref}
        type="search"
        variant="search"
        size={size}
        icon={<Icon name="search" size={size} />}
        iconPosition="left"
        {...props}
      />
    </div>
  );
});

Search.displayName = 'Search';

export { Search };
