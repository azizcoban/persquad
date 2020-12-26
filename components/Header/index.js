import clsx from 'clsx';
import styles from './Header.module.scss';
import Button from '../Button';

const Header = () => (
  <header className={clsx('main-content', styles.headerContainer)}>
    <div className={styles.leftSection}>
      <span className={styles.logo}>persquad.</span>
    </div>
    <div className={styles.rightSection}>
      <Button className={styles.headerButton}>Fiyatlandırma</Button>
      <Button className={styles.headerButton}>Persquad Nedir?</Button>
      <Button filled>Giriş Yap</Button>
    </div>
  </header>
);

export default Header;
