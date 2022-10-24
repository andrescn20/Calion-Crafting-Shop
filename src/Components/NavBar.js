import styles from '../Styles/navBar.module.scss';
import { Link } from 'react-router-dom';
import wagon from '../wagon.png';

const NavBar = ({ toggleCart, globalQuantity }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.pageName}>
        <img
          src={require('../logo-black.png')}
          alt='Calion-Crafting-Logo'
          className={styles.headerLogo}
        />
        <p className={styles.headerText}> Calion Crafting</p>
      </div>
      <ul className={styles.navLinks}>
        <Link to='/'>
          <li className={styles.link}> Home </li>
        </Link>
        <Link to='/shop'>
          <li className={styles.link}> Products </li>
        </Link>

        <div className={styles.cartNav}>
          <button className={styles.cart} onClick={toggleCart}>
            <img src={wagon} alt='Cart' />
          </button>
          {globalQuantity === 0 ? (
            ''
          ) : (
            <div className={styles.global}>{globalQuantity}</div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
