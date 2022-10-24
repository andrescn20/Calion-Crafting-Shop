import React, { useEffect } from 'react';
import styles from '../Styles/home.module.scss';

const Home = ({ updateBackground }) => {
  useEffect(() => updateBackground('home'));

  return (
    <div className={styles.home}>
      <div className={styles.homeText}>
        <h1>
          SKYRIM : <span>Daedric Collection</span>
        </h1>

        <button className={styles.preOrder}>PREORDER</button>
      </div>
    </div>
  );
};

export default Home;
