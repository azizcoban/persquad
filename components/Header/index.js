import clsx from 'clsx';
import Link from 'next/link';
import styles from './Header.module.scss';
import Button from '../ui/Button';

const Header = ({ content }) => (
  <header className={clsx('main-content', styles.headerContainer)}>
    <div className={styles.leftSection}>
      <Link href="/" as="/">
        <span className={styles.logo}>persquad.</span>
      </Link>
    </div>
    <div className={styles.rightSection}>
      {content.map((item) => (
        <Link href={item.hyperlink} as={item.hyperlink} key={item.id}>
          <Button
            key={item.id}
            className={styles.headerButton}
            filled={item.filled}
          >
            {item.title}
          </Button>
        </Link>
      ))}
    </div>
  </header>
);

export default Header;
