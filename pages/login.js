import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { signIn } from 'next-auth/client';
import Input from '../components/ui/Input';
import styles from '../styles/pages/Login.module.scss';
import { connectToDB } from '../db/connect';
import { getUserByEmail } from '../db/user';

// eslint-disable-next-line
const Login = ({ csrfToken }) => {
  const {
    register, handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    signIn('credentials', data);
  };

  return (
    <div className={clsx('main-content', styles.loginWrapper)}>
      <h1 className={styles.loginTitle}>Giriş Yap</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
        <Input className={styles.inputGroup} name="username" label="Username" inputRef={register} />
        <Input className={styles.inputGroup} name="password" label="Password" inputRef={register} isPassword />
        <input className={clsx('submit-input', styles.submit)} type="submit" value="Giriş Yap" />
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDB();
  const user = await getUserByEmail(db, 'herikel@erikelhukuk.com');

  console.log(user);

  return {
    props: {

    },
  };
}

export default Login;
