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
  const [checkoutVisibility, setCheckoutVisibility] = useState(
    styles.notVisible
  );

  //Toggles Visibility on or off.
  useEffect(() => {
    if (isCartVisible === false) {
      setVisibilityClass(styles.notVisible);
    }
    if (isCartVisible === true) {
      setVisibilityClass(styles.visible);
    }
  }, [isCartVisible]);

  const openCheckout = () => {
    setCheckoutVisibility(styles.visible);
  };

  const closeCheckout = () => {
    setCheckoutVisibility(styles.notVisible);
  };

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

  const divClick = () => {
    closeCheckout();
    toggleCart();
  };
  return (
    <div className={`${styles.shoppingCart} ${visibilityClass}`}>
      <div
        className={`${styles.emptyDiv} ${visibilityClass}`}
        onClick={divClick}
      ></div>
      <div className={`${styles.cartContainer} ${visibilityClass}`}>
        <div className={styles.products}> {displayCartItems}</div>
        <div className={styles.cartControls}>
          <p className={styles.totalPrice}>{'Total: $' + totalPrice}</p>
          <button className={styles.checkout} onClick={openCheckout}>
            Checkout
          </button>
          <button className={styles.reset} onClick={resetCart}>
            Empty Cart
          </button>
        </div>
      </div>
      <button className={styles.closeCart} onClick={toggleCart}>
        Close Cart
      </button>
      <div className={`${styles.checkoutDiv} ${checkoutVisibility}`}>
        <button className={styles.closeCheckout} onClick={closeCheckout}>
          Close
        </button>
        <p>
          After thorough consideration, we have concluded this items are not
          worth any value in human currency. Purchases have been halted until
          further notice. We are sorry for any inconvenience.
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
