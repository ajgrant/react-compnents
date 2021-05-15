import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import Dropdown from '../components/Dropdown';
import countries from '../data.json';

export default function Home() {
  const [value, setValue] = useState(null);

  return (
    <div className={styles.container}>
      <Dropdown
        options={countries}
        prompt="Select a country..."
        value={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
}
