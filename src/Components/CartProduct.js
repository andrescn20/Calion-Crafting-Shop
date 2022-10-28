import { useEffect, useState } from 'react';
import styles from '../Styles/cartProduct.module.scss';

const CartProduct = ({
  name,
  price,
  image,
  quantity,
  modifyCart,
  updatePricesArray,
}) => {
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  // const totalPriceRef = useRef(0);

  const adjutsQuantity = (e) => {
    modifyCart(
      { name: name, price: price, image: image },
      Number(e.target.value)
    );
  };
  useEffect(() => {
    setTotalItemPrice(price.replace('$', '') * quantity);
  }, [price, quantity]);

  return (
    <div className={styles.cartProduct}>
      <img src={image} alt={name} className={styles.productImage} />

      <h2 className={styles.title}>{name}</h2>

      <p className={styles.price}>{'$' + totalItemPrice}</p>

      <form className={styles.cartOptions}>
        <button
          type='button'
          value={-1}
          className={styles.adjustBtn}
          onClick={adjutsQuantity}
        >
          -
        </button>
        <input
          type='text'
          className={styles.textInput}
          value={quantity}
          readOnly
          disabled
        ></input>
        <button
          type='button'
          value={1}
          className={styles.adjustBtn}
          onClick={adjutsQuantity}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default CartProduct;
