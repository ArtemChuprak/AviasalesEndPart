import React from 'react';
import Input from '../UI/Input/Input';
import styles from './Filter.module.scss';

function Filter() {
  return (
    <form className={styles.filter}>
      <div className={styles.title}>Количество пересадок</div>
      <Input id="transfers" title="Все" />
      <Input id="withoutTransfers" title="Без пересадок" />
      <Input id="oneTransfer" title="1 пересадка" />
      <Input id="twoTransfer" title="2 пересадки" />
      <Input id="threeTransfer" title="3 пересадки" />
    </form>
  );
}

export default Filter;