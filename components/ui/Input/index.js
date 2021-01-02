import { useState } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

const Input = ({
  className,
  error,
  isPassword,
  label,
  helper,
  required,
  placeholder,
  disabled,
  inputRef,
  name,
  type,
  onFocus,
  onChange,
  onBlur,
  defaultValue,
  maxLength,
  inputMode,
  pattern,
  min,
  max,
  value,
}) => {
  const [isVisible, setIsVisible] = useState(isPassword);

  const togglePassword = () => setIsVisible(!isVisible);

  return (
    <div className={clsx(styles.inputWrapper, className)}>
      <input
        className={clsx(styles.input, error && styles.hasError)}
        placeholder={placeholder || ' '}
        disabled={disabled}
        ref={inputRef}
        type={type || (isVisible ? 'password' : 'text')}
        name={name}
        onFocus={({ target }) => onFocus && onFocus(target)}
        onBlur={({ target }) => onBlur && onBlur(target)}
        onChange={({ target }) => onChange && onChange(target)}
        defaultValue={defaultValue}
        maxLength={maxLength}
        inputMode={inputMode}
        pattern={pattern}
        min={min}
        max={max}
        value={value}
      />
      <label className={styles.label} htmlFor={name}>{`${label}${required ? '*' : ''}`}</label>

      {isPassword && (
        <button type="button" onClick={togglePassword} className={styles.eyeIcon} />
      )}
      {error && <div className={styles.error}>{error}</div>}
      {helper && <span className={styles.helper}>{helper}</span>}
    </div>
  );
};

export default Input;
