import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/client';
import clsx from 'clsx';
import Input from '../components/ui/Input';
import styles from '../styles/pages/Login.module.scss';
import Button from '../components/ui/Button';

const Login = () => {
  const [session, loading] = useSession();
  const {
    register, handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(loading);

  useEffect(() => {
    if (session) {
      alert('user is logged in', session);
    }
  }, [session]);

  return (
    <div className={clsx('main-content', styles.loginWrapper)}>
      <h1 className={styles.loginTitle}>Giriş Yap</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <Input className={styles.inputGroup} name="username" label="Username" inputRef={register} />
        <Input className={styles.inputGroup} name="password" label="Password" inputRef={register} isPassword />
        <input className={clsx('submit-input', styles.submit)} type="submit" value="Giriş Yap" />
      </form>

      <Button filled type="button" onClick={() => signIn('google')}>Google</Button>
    </div>
  );
};

export function getServerSideProps() {
  const dburl = process.env.DATABASE_URI;

  console.log(dburl);

  return {
    props: {
      db: dburl,
    },
  };
}

export default Login;
