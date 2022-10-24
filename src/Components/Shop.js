import React from 'react';
import styles from '../Styles/shop.module.scss';
import Product from './Product';
import { useEffect } from 'react';

const Shop = ({
  shopList,
  updateCartList,
  globalQuantity,
  updateBackground,
}) => {
  useEffect(() => {
    updateBackground('shop');
  });

  const itemsList = shopList.map((sword) => {
    return (
      <Product
        key={sword.name}
        {...sword}
        updateCartList={updateCartList}
        globalQuantity={globalQuantity}
      />
    );
  });

  return (
    <div className={styles.shop}>
      <div className={styles.productContainer}>{itemsList}</div>
    </div>
  );
};

export default Shop;
