import React, { useEffect, useState } from 'react';
import styles from '../Styles/shoppingCart.module.scss';
import CartProduct from './CartProduct';

const ShoppingCart = ({
  isCartVisible,
  cartList,
  modifyCart,
  resetCart,
  globalQuantity,
}) => {
  const [visibilityClass, setVisibilityClass] = useState(styles.visible);

  useEffect(() => {
    if (isCartVisible === false) {
      setVisibilityClass(styles.notVisible);
    }
    if (isCartVisible === true) {
      setVisibilityClass(styles.visible);
    }
  }, [isCartVisible]);

  const displayCartItems = cartList.map((item) => {
    return (
      <CartProduct
        key={item.name}
        {...item}
        modifyCart={modifyCart}
        globalQuantity={globalQuantity}
      />
    );
  });

  return (
    <div className={`${styles.shoppingCart} ${visibilityClass}`}>
      <div className={styles.itemsContainer}>{displayCartItems}</div>
      <button className={styles.reset} onClick={resetCart}>
        Empty Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
