import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/Portal.module.scss';
import Spinner from '../../components/ui/Spinner';

const TeamsPortal = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    if (!session && !loading) {
      router.push('/');
    }
  }, [session, loading]);

  return (
    <div className={clsx('main-content', 'center', styles.portalWrapper)}>
      {(!loading && session) ? (
        <>
          <h1 className={styles.portalHeader}>Yönettiğin Takımlar</h1>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TeamsPortal;
