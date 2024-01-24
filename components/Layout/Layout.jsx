import React from 'react'
import styles from './Layout.module.scss';

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src="/wola-logo.svg" alt="Studio Wola logo" className={styles.logo} />
        <hr></hr>
        <ul className={styles.menu}>
          <li><a href="/">Home</a></li>
          <li><a href="#">Zaproszenia na ślub</a></li>
          <li><a href="#">Akcesoria ślubne</a></li>
          <li><a href="#">Kontakt</a></li>
        </ul>
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  )
}

export default Layout