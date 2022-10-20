import React, { useState } from 'react';
import styles from '../Styles/navBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleCart }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.pageName}>
        <img
          src={'./Images/logo-black.png'}
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
        <button className={styles.cart} onClick={toggleCart}>
          {' '}
          Cart{' '}
        </button>
      </ul>
    </div>
  );
};

export default NavBar;
