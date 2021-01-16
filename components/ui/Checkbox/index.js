import styles from './Checkbox.module.scss';

const Checkbox = () => (
  <div className={styles.checkbox}>
    <input type="checkbox" id="checkbox_1" />
    <label htmlFor="checkbox_1" />
  </div>
);

export default Checkbox;
