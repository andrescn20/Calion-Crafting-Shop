import React from 'react';
import styles from '../Styles/product.module.scss';

const Rating = ({ rating }) => {
  return (
    <div className={styles.ratingContainer}>
      <img src='./Images/star.png' alt='star' />
      <p className={styles.rating}>{rating}</p>
    </div>
  );
};

export default Rating;
