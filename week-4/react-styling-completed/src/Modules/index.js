import React from 'react';
import styles from './styles.module.css';
// console.log("style", styles)

export default function App() {
  return (
    <div className={styles.container}>
      <h2>Modules</h2>
      <button className={styles.primary}>Primary</button>
      <button className={styles.secondary}>Secondary</button>
      <button className={styles.success}>Success</button>
      <button>Danger</button>
      <button>Warning</button>
      <button>Info</button>
      <button>White</button>
    </div>
  );
}
