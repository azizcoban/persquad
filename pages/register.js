import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import Input from '../components/ui/Input';
import styles from '../styles/pages/Register.module.scss';
import Checkbox from '../components/ui/Checkbox';
import { registerCustomer } from '../lib/services/auth.service';
import Spinner from '../components/ui/Spinner';

const Register = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [role, setRole] = useState('leader');

  const {
    register, handleSubmit,
  } = useForm();

  useEffect(() => {
    if (session && !loading) {
      router.push('/teams/portal');
    }
  }, [session, loading]);

  const registerHandler = async (data) => {
    try {
      const userData = data;
      userData.role = role;
      userData.username = data.name;
      await registerCustomer(userData);
      signIn('credentials', {
        username: data.email,
        password: data.password,
      });
      // router.push('/teams/portal');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={clsx('main-content', 'center', styles.registerWrapper)}>
      {(!loading && !session) ? (
        <>
          <h1 className={styles.registerTitle}>Hoşgeldin! Hesabını oluşturmak ile başlayalım.</h1>
          <span className={styles.roleLabel}>Takımdaki rolün:</span>
          <div className={styles.roleSection}>
            <div className={clsx(styles.roleItem, role === 'leader' && styles.selected)} onClick={() => setRole('leader')}>Takım Lideri</div>
            <div className={clsx(styles.roleItem, role === 'member' && styles.selected)} onClick={() => setRole('member')}>Takım Üyesi</div>
          </div>
          {role === 'leader' ? (
            <form onSubmit={handleSubmit(registerHandler)} className={styles.registerForm}>
              <Input className={styles.inputGroup} name="name" label="İsmin" inputRef={register} />
              <Input className={styles.inputGroup} name="email" label="Email Adresin" inputRef={register} />
              <Input className={styles.inputGroup} name="company" label="Şirketin" inputRef={register} />
              <Input className={styles.inputGroup} name="password" label="Şifren" inputRef={register} isPassword />
              <Input className={styles.inputGroup} name="confirm-password" label="Şifre Tekrar" inputRef={register} isPassword />
              <div className={styles.checkboxSection}>
                <Checkbox />
                <span className={styles.textWrapper}>
                  <a href="/" className={styles.link}>Kullanıcı Sözleşmesi</a>
                  {' '}
                  ve
                  {' '}
                  <a href="/" className={styles.link}>Gizlilik Politikası</a>
                  'ını
                  okudum ve kabul ediyorum.
                </span>
              </div>
              <input className={clsx('submit-input', styles.submit)} type="submit" value="Devam Et" />
            </form>
          ) : (
            <div className={styles.helperText}>
              Lütfen mail kutunu kontrol et.
              Devam edebilmek için ekip liderinin gönderdiği davet linkini kullanmalısın.
            </div>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Register;
