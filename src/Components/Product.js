import React, { useEffect, useState } from 'react';
import styles from '../Styles/product.module.scss';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const Product = ({ name, image, price, review, addCartItems, cartItems }) => {
  const [reviewVisibility, setReviewVisibility] = useState(styles.notVisible);
  const [quantity, setQuantity] = useState(0);

  const setVisibilityOn = () => {
    setReviewVisibility(styles.visible);
  };
  const setVisibilityOff = () => {
    setReviewVisibility(styles.notVisible);
  };

  const handleAddtoCart = () => {
    setQuantity((quantity) => (quantity = quantity + 1));
  };

  useEffect(() => {
    let newItem = {
      name: name,
      price: price,
      image: image,
      quantity: quantity,
    };

    if (quantity === 1) {
      addCartItems([...cartItems, newItem]);
    }
    if (quantity > 1) {
      let newList = cartItems.map((item) => {
        if (item.name === newItem.name) {
          return newItem;
        } else {
          return item;
        }
      });
      addCartItems(newList);
    }
  }, [quantity]);

  return (
    <div className={styles.product}>
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
          <img src='./Images/click-me.png' alt='clickme' />
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
