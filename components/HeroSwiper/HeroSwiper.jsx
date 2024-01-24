import React from 'react'
import styles from './HeroSwiper.module.scss';

export const HeroSwiper = ({children}) => {
  return (
    <div className={styles.heroSwiper}>

    <div className={styles.container}>
    <div className={styles.grid}>
      {children}
    </div>
    </div>
    </div>
  )
}
