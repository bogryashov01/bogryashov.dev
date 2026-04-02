import styles from './HeroBackdrop.module.scss';

export default function HeroBackdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.backdrop__glow} />
      <div className={styles.backdrop__grid} />
      <div className={styles.backdrop__line} />
    </div>
  );
}
