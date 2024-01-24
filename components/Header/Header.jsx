import React from 'react'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
      <div className={styles.content}>
        <img src="/wola-logo.svg" alt="Studio Wola logo" className={styles.logo} />
        <ul className={styles.menu}>
          <li>Zaproszenia na ślub</li>
          <li>Akcesoria ślubne</li>
          <li>Teksty i cytaty</li>
          <li>Kontakt</li>
        </ul>
        <div className={styles.rightCol}>
          <img src="/icons/bag.svg" className={styles.cartIcon} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header
