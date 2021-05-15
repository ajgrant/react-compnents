import { useState } from 'react';
import styles from '../styles/Dropdown.module.scss';

export default function Dropdown({ options, prompt, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.control} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.selected_value}>
          {value ? value.name : prompt}
        </div>
        <div className={`${styles.arrow} ${open ? styles.open : null}`} />
      </div>
      <div className={`${styles.options} ${open ? styles.open : null}`}>
        {options.map((option) => (
          <div
            className={styles.option}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option.name}
          </div>
        ))}
      </div>
    </div>
  );
}
