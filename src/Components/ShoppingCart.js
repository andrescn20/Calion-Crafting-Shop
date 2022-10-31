import React, { useEffect, useState } from 'react';
import styles from '../Styles/shoppingCart.module.scss';
import CartProduct from './CartProduct';
import close from '../Images/close-black.png';

const ShoppingCart = ({
  isCartVisible,
  cartList,
  modifyCart,
  resetCart,
  globalQuantity,
  totalPrice,
  toggleCart,
}) => {
  const [visibilityClass, setVisibilityClass] = useState(styles.notVisible);
  const [checkoutVisibility, setCheckoutVisibility] = useState(
    styles.notVisible
  );
  const [checkoutText, setCheckoutText] = useState('');
  const [cartDisplay, setCartDisplay] = useState('Cart is Empty');

  //Toggles Visibility of whole component on or off.
  useEffect(() => {
    if (isCartVisible === false) {
      setVisibilityClass(styles.notVisible);
    }
    if (isCartVisible === true) {
      setVisibilityClass(styles.visible);
    }
  }, [isCartVisible]);

  //Toggle visibility of CheckoutBox, separeted in 2 functions.
  const openCheckout = () => {
    setCheckoutVisibility(styles.visible);
  };

  useEffect(() => {
    if (globalQuantity === 0) {
      setCheckoutText(
        'Oops! Looks like there are no items in your Cart. Please add items to cart before proceeding to checkout'
      );
    } else {
      setCheckoutText(
        'After thorough consideration, we have concluded this items are not worth any value in human currency. Purchases have been halted until further notice. We are sorry for any inconvenience.'
      );
    }
  }, [globalQuantity]);

  const closeCheckout = () => {
    setCheckoutVisibility(styles.notVisible);
  };

  //Populates cart with current items.
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

  useEffect(() => {
    if (globalQuantity === 0) {
      setCartDisplay(<p className={styles.emptyCart}>Cart is Empty</p>);
    } else {
      setCartDisplay(displayCartItems);
    }
  }, [globalQuantity]);

  //"Closes" the cart and also the checkout msg in case it is open
  const closeWholeCart = () => {
    closeCheckout();
    toggleCart();
  };

  //Closes Cart with Keyboard
  const closeOpenModals = (event) => {
    if ((event.key === 'Escape') & (isCartVisible === true)) {
      closeWholeCart();
    }
  };

  return (
    //Shopping Cart Main Container

    <div
      className={`${styles.shoppingCart} ${visibilityClass}`}
      onKeyDown={closeOpenModals}
      tabIndex='-1'
    >
      <div
        className={`${styles.checkoutAuxiliarContainer} ${checkoutVisibility}`}
        onClick={closeCheckout}
      >
        <div className={`${styles.checkoutDiv} ${checkoutVisibility}`}>
          <button className={styles.closeCheckout} onClick={closeCheckout}>
            <img src={close} alt='Close Button' />
          </button>
          <p>{checkoutText}</p>
        </div>
      </div>

      <div
        className={`${styles.emptyDiv} ${visibilityClass}`}
        onClick={closeWholeCart}
      ></div>

      <div className={`${styles.cartContainer} ${visibilityClass}`}>
        <button className={styles.closeCart} onClick={closeWholeCart}>
          <img src={close} alt='Close Button' />
        </button>

        <div className={styles.products}>{cartDisplay}</div>
        <div className={styles.cartControls}>
          <p className={styles.totalPrice}>{'Total: $' + totalPrice}</p>
          <button
            className={`${styles.checkout} ${checkoutVisibility}`}
            onClick={openCheckout}
          >
            Checkout
          </button>
          <button className={styles.reset} onClick={resetCart}>
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
