import clsx from 'clsx';
import styles from './PageHeader.module.scss';

const PageHeader = ({ content }) => (
  <div className={clsx('main-content', styles.pageHeaderWrapper)}>
    <h1 className={styles.pageHeaderTitle}>{content.title}</h1>
    <span className={styles.pageHeaderDesc}>{content.description}</span>
  </div>
);

export default PageHeader;
