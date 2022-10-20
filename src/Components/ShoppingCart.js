import React, { useEffect, useState } from 'react';
import styles from '../Styles/shoppingCart.module.scss';
import CartProduct from './CartProduct';

const ShoppingCart = ({ isCartVisible, cartItems, resetCartItems }) => {
  const [visibilityClass, setVisibilityClass] = useState(styles.notVisible);

  useEffect(() => {
    if (isCartVisible === false) {
      setVisibilityClass(styles.notVisible);
    }
    if (isCartVisible === true) {
      setVisibilityClass(styles.visible);
    }
  }, [isCartVisible]);

  const cartItemsDisplay = cartItems.map((item) => {
    return <CartProduct key={item.name} {...item} />;
  });

  const emptyCart = () => {
    resetCartItems();
  };

  return (
    <div className={`${styles.shoppingCart} ${visibilityClass}`}>
      <div className={styles.itemsContainer}>{cartItemsDisplay}</div>
      <button className={styles.reset} onClick={emptyCart}>
        Empty Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
