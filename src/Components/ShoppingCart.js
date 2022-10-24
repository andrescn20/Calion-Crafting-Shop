import React, { useEffect, useState } from 'react';
import styles from '../Styles/shoppingCart.module.scss';
import CartProduct from './CartProduct';

const ShoppingCart = ({
  isCartVisible,
  cartList,
  updateShopList,
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
        updateShopList={updateShopList}
        origin={'cart'}
        globalQuantity={globalQuantity}
      />
    );
  });

  const emptyCart = () => {};

  return (
    <div className={`${styles.shoppingCart} ${visibilityClass}`}>
      <div className={styles.itemsContainer}>{displayCartItems}</div>
      <button className={styles.reset} onClick={emptyCart}>
        Empty Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
