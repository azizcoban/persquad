import clsx from 'clsx';
import styles from './Header.module.scss';
import Button from '../Button';

const Header = ({ content }) => (
  <header className={clsx('main-content', styles.headerContainer)}>
    <div className={styles.leftSection}>
      <span className={styles.logo}>persquad.</span>
    </div>
    <div className={styles.rightSection}>
      {content.map((item) => (
        <Button key={item.id} className={styles.headerButton}>{item.title}</Button>
      ))}
    </div>
  </header>
);

export default Header;
