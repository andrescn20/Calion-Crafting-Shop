import React, { useState } from 'react';
import styles from '../Styles/product.module.scss';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import clickMe from '../click-me.png';

const Product = ({ name, image, price, review, updateCartList }) => {
  const [reviewVisibility, setReviewVisibility] = useState(styles.notVisible);

  const handleAddtoCart = () => {
    updateCartList({ name: name, price: price, image: image });
  };

  //Logic for showing and hiding Top Review
  function setVisibilityOn() {
    setReviewVisibility(styles.visible);
  }
  function setVisibilityOff() {
    setReviewVisibility(styles.notVisible);
  }
  return (
    <div className={styles.shopProduct}>
      <Zoom>
        <img src={image} alt={name} className={styles.productImage} />
      </Zoom>
      <div className={styles.flexContainer}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.price}>{price}</p>
        <div
          className={styles.reviewContainer}
          onMouseEnter={setVisibilityOn}
          onMouseLeave={setVisibilityOff}
        >
          <p className={styles.reviewTitle}>Top Review</p>
          <img src={clickMe} alt='clickme' />
        </div>
        <button className={styles.addBtn} onClick={handleAddtoCart}>
          Add to Cart
        </button>
      </div>
      <p className={reviewVisibility}>"{review}"</p>
    </div>
  );
};

export default Product;
