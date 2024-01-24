import React from 'react'
import styles from './HomeHero.module.scss';

const HomeHero = () => {
  return (
    <div className={styles.container}>
      <div class={styles.main}>
      <img src={'/zapro2.jpg'} />
      </div>
      <div className={styles.mid}>
      Miłość nie polega na tym, aby wzajemnie sobie się przyglądać
      </div>
      <div className={styles.menu}>
        <ul>

<li>Zaproszenia na ślub</li>
<li>Akcesoria ślubne</li>
<li>Kontakt</li>
        </ul>
      </div>
      <div className={styles.detail}>
      <img src={'/winietki.jpg'} />

      </div>
    </div>
  )
}

export default HomeHero