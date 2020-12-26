import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  children, filled, className, outline, onClick,
}) => (
  <button
    className={clsx(styles.button, filled && styles.filled, outline && styles.outline, className)}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
