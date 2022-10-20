import React from 'react';
import styles from '../Styles/shop.module.scss';
import Product from './Product';

const Shop = ({ swords, cartItems, addCartItems }) => {
  const swordsList = swords.map((sword) => {
    return (
      <Product
        key={sword.name}
        {...sword}
        addCartItems={addCartItems}
        cartItems={cartItems}
      />
    );
  });

  return (
    <div className={styles.shop}>
      <div className={styles.productContainer}>{swordsList}</div>
    </div>
  );
};

export default Shop;
