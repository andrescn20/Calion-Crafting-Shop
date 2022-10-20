// import React, { useState } from 'react';
import styles from '../Styles/cartProduct.module.scss';

const cartProduct = ({ name, image, price, quantity }) => {
  return (
    <div className={styles.cartProduct}>
      <img src={image} alt={name} className={styles.productImage} />

      <h2 className={styles.title}>{name}</h2>

      <p className={styles.price}>{price}</p>

      <p>{quantity}</p>

      <button className={styles.addBtn}>Add to Cart</button>
      <form className={styles.cartOptions}>
        <div className={styles.inputTextContainer}>
          <input type='number' className={styles.textInput}></input>
          <button type='button' className={styles.adjustButton}>
            +
          </button>
          <button type='button' className={styles.adjustButton}>
            -
          </button>
        </div>
      </form>
    </div>
  );
};

export default cartProduct;
