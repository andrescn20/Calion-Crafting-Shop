import styles from '../Styles/cartProduct.module.scss';

const CartProduct = ({ name, price, image, quantity, modifyCart }) => {
  const adjutsQuantity = (e) => {
    modifyCart(
      { name: name, price: price, image: image },
      Number(e.target.value)
    );
  };
  return (
    <div className={styles.cartProduct}>
      <img src={image} alt={name} className={styles.productImage} />

      <h2 className={styles.title}>{name}</h2>

      <p className={styles.price}>{price}</p>

      <p>{quantity}</p>

      <form className={styles.cartOptions}>
        <div className={styles.inputTextContainer}>
          <input type='number' className={styles.textInput}></input>
          <button
            type='button'
            value={1}
            className={styles.adjustButton}
            onClick={adjutsQuantity}
          >
            +
          </button>
          <button
            type='button'
            value={-1}
            className={styles.adjustButton}
            onClick={adjutsQuantity}
          >
            -
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartProduct;
