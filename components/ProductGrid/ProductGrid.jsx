import ProductGridItem from "@components/ProductGridItem/ProductGridItem";
import React from "react";
import Masonry from "react-masonry-css";
import styles from "./ProductGrid.module.scss";
//...

function ProductGrid({ title = "Zaproszenia", products, description }) {
  return (
    <div className={styles.productGrid}>
      <div className={styles.content}>
        <div className={styles.titleSpacer}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <article className={styles.summary}>
            <p>{description}</p>
          </article>
          {products.map((p) => (
            <ProductGridItem
              name={p.name}
              price={p.price}
              image={p.image}
              link={"#"}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default ProductGrid;
