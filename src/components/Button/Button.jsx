import React from 'react';
import styles from './Button.module.scss';
import icon from '../../assets/search.png';

const Button = ({ variant, label, disabled, rowCard, hoverStyle }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[rowCard]} ${
        disabled ? styles.disabled : ''
      }`}
      disabled={disabled}
      style={hoverStyle}
    >
      {variant === 'icon-text' && <img src={icon} alt="icon" className={styles.icon} />}
      <span className={`${styles.label} ${styles[variant]}`}>{label}</span>
    </button>
  );
};

export default Button;