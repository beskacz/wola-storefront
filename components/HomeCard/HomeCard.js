import React from "react";
import styles from "./HomeCard.module.scss";

export const HomeCard = ({ image, text }) => {
  return (
    <div className={styles.homeCard}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.content}>
        <h2 class={styles.text}>{text}</h2>
      </div>
    </div>
  );
};
