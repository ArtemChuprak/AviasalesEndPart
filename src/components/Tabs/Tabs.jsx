import React from 'react';
import Tab from '../Tab/Tab';
import styles from './Tabs.module.scss';

function Tabs() {
  return (
    <div className={styles.tabs}>
      <Tab id="cheap" title="Самый дешевый" />
      <Tab id="fast" title="Самый быстрый" />
      <Tab id="optimal" title="Оптимальный" />
    </div>
  );
}
export default Tabs;