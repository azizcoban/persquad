import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import Input from '../components/ui/Input';
import styles from '../styles/pages/Login.module.scss';

const Login = () => {
  const {
    register, handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

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

export default Login;
