import React from "react";

import styles from "./ProductGridItem.module.scss";

function ProductGridItem({ name, price, image, link }) {
  return (
    <article className={styles.productItem}>
        <a href={`/produkt/${name}`} >
        <div className={styles.productItemContent}>
          <div className={styles.productImage}>
            <img src={`/cards/${image}`} alt="" />
          </div>
          <div className={styles.productItemDescription}>
            <span>Zaproszenie - {("" + price).replace(".", ".")}zł</span>
            <h4 className={styles.productTitle}>{name}</h4>
          </div>
        </div>
    </a>
      </article>
  );
}

export default ProductGridItem;
