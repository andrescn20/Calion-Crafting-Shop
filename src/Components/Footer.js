import React from 'react';
import styles from '../Styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles}>
      <a href='https://github.com/andrescn20' className={styles.creator}>
        <p>
          Created by: <strong> andrescn20 </strong>
        </p>
        <img
          className={styles.gitLogo}
          src='https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png'
          alt='gitLogo'
        />
      </a>
    </footer>
  );
};

export default Footer;
