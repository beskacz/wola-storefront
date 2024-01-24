import React from 'react'
import styles from './HomeHero.module.scss';

const HomeHero = () => {
  return (
    <div className={styles.container}>
      <div class={styles.main}>
      <img src={'/zapro2.jpg'} />
      </div>
      <div className={styles.logobg}>
        <div style={{ backgroundImage: "url('/wola-logo.svg')" }}></div>
      </div>
      <div className={styles.card}>
      <p>
        <span>Wejdź w świat wiecznej miłości</span> i wykwintnych uroczystości z naszym sklepem internetowym oferującym zaproszenia ślubne.</p>
      </div>
    </div>
  )
}

export default HomeHero