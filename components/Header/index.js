import clsx from 'clsx';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import styles from './Header.module.scss';
import Button from '../ui/Button';

const Header = ({ content }) => {
  // eslint-disable-next-line
  const [session, loading] = useSession();

  return (
    <header className={clsx('main-content', styles.headerContainer)}>
      <div className={styles.leftSection}>
        <Link href="/" as="/">
          <span className={styles.logo}>persquad.</span>
        </Link>
      </div>
      <div className={styles.rightSection}>
        {!session ? content.map((item) => (
          <Link href={item.hyperlink} as={item.hyperlink} key={item.id}>
            <Button
              key={item.id}
              className={styles.headerButton}
              filled={item.filled}
            >
              {item.title}
            </Button>
          </Link>
        )) : (
          <>
            <Link href="/teams/portal" as="/teams/portal">
              <Button className={styles.headerButton} filled>
                Takımları Gör
              </Button>
            </Link>
            <Link href="/teams/portal" as="/teams/portal">
              <Button className={styles.headerButton} onClick={signOut}>
                Çıkış Yap
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
