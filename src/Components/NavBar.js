import styles from '../Styles/navBar.module.scss';
import { Link } from 'react-router-dom';
import wagon from '../Images/wagon.png';

const NavBar = ({ toggleCart, globalQuantity }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.calionCrafting}>
        <Link to='/' className={styles.actionContainer}>
          <img
            src={require('../Images/new-logo.png')}
            alt='Calion-Crafting-Logo'
            className={styles.headerLogo}
          />
          <p className={styles.headerText}> Calion Crafting</p>
        </Link>
      </div>
      <ul className={styles.navLinksContainer}>
        <Link to='/'>
          <li className={`${styles.link} ${styles.rightNavElements}`}>
            {' '}
            Home{' '}
          </li>
        </Link>
        <Link to='/shop'>
          <li className={`${styles.link} ${styles.rightNavElements}`}>
            {' '}
            Products{' '}
          </li>
        </Link>

        <div className={`${styles.cartNav} ${styles.rightNavElements}`}>
          <button className={styles.cart} onClick={toggleCart}>
            <img src={wagon} alt='Cart' />
          </button>
          {globalQuantity === 0 ? (
            ''
          ) : (
            <div key={globalQuantity} className={styles.globalQuantity}>
              {globalQuantity}
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
