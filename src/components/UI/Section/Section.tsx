import { ReactNode } from 'react';
import Container from '@/components/UI/Container/Container';
import styles from './Section.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export default function Section({ children, className = '', containerClassName = '' }: Props) {
  return (
    <section className={`${styles.section} ${className}`.trim()}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
