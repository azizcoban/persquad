import styles from './Layout.module.scss';
import Header from '../Header';

const Layout = ({ children, content }) => (
  <div className={styles.container}>
    <div className="main-content">
      <Header content={content} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
