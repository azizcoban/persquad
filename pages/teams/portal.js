import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from '../../styles/pages/Portal.module.scss';
import Spinner from '../../components/ui/Spinner';
import { getUserOnboardingContent } from '../../lib/services/content.service';
import Button from '../../components/ui/Button';

const TeamsPortal = () => {
  const router = useRouter();
  const [session, loading] = useSession();
  const [onboarding, setOnboarding] = useState(true);
  const [content, setContent] = useState();

  useEffect(() => {
    const getOnboardingContent = async () => {
      const response = await getUserOnboardingContent();
      setContent(response);
    };

    getOnboardingContent();
  }, []);

  useEffect(() => {
    if (!session && !loading) {
      router.push('/');
    } else {
      setOnboarding(session?.user?.isNewUser);
    }
  }, [session, loading]);

  return (
    <div className={clsx('main-content', 'center', styles.portalWrapper)}>
      {(!loading && session) ? (
        <>
          {!onboarding ? (
            <h1 className={styles.portalHeader}>Yönettiğin Takımlar</h1>
          ) : (
            <div className={styles.onboardingWrapper}>
              <h1 className={styles.onboardingTitle}>{content?.title}</h1>
              <p className={styles.onboardingText}>{content?.text}</p>
              <Button className={styles.headerButton} filled onClick={() => setOnboarding(false)}>
                Devam Et
              </Button>
            </div>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TeamsPortal;
