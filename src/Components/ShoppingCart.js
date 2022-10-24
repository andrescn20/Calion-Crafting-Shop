import React, { useEffect, useState } from 'react';
import styles from '../Styles/shoppingCart.module.scss';
import CartProduct from './CartProduct';

const ShoppingCart = ({
  isCartVisible,
  cartList,
  modifyCart,
  resetCart,
  globalQuantity,
  totalPrice,
  toggleCart,
}) => {
  const [visibilityClass, setVisibilityClass] = useState(styles.visible);

  //Toggles Visibility on or off.
  useEffect(() => {
    if (isCartVisible === false) {
      setVisibilityClass(styles.notVisible);
    }
    if (isCartVisible === true) {
      setVisibilityClass(styles.visible);
    }
  }, [isCartVisible]);

  //Generates de CartProduct components in cart
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
      <div className={styles.cartContainer}>
        <div className={styles.products}> {displayCartItems}</div>
        <div className={styles.cartControls}>
          <p className={styles.totalPrice}>{'Total: $' + totalPrice}</p>
          <button className={styles.reset} onClick={resetCart}>
            Empty Cart
          </button>
          <button className={styles.closeCart} onClick={toggleCart}>
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
