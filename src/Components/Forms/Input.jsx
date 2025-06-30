import styles from './Input.module.css';

const Input = ({ label, type, name, value, handleChange, onBlur, error }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type || 'type'}
        id={name}
        className={styles.input}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
