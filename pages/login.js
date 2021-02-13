import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Input from '../components/ui/Input';
import Spinner from '../components/ui/Spinner';
import styles from '../styles/pages/Login.module.scss';

// eslint-disable-next-line
const Login = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  const {
    register, handleSubmit,
  } = useForm();

  useEffect(() => {
    if (session && !loading) {
      router.push('/teams/portal');
    }
  }, [session, loading]);

  const onSubmit = async (data) => {
    signIn('credentials', data);
  };

  return (
    <div className={clsx('main-content', styles.loginWrapper)}>
      {(!loading && !session)
        ? (
          <>
            <h1 className={styles.loginTitle}>Giriş Yap</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
              <Input className={styles.inputGroup} name="username" label="Email" inputRef={register} />
              <Input className={styles.inputGroup} name="password" label="Password" inputRef={register} isPassword />
              <input className={clsx('submit-input', styles.submit)} type="submit" value="Giriş Yap" />
            </form>
          </>
        )
        : (
          <Spinner />
        )}
    </div>
  );
};

export default Login;
