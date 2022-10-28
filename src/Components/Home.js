import React, { useEffect, useState } from 'react';
import styles from '../Styles/home.module.scss';

const Home = ({ updateBackground }) => {
  const [preorderVisibility, setPreorderVisibility] = useState(
    styles.notVisible
  );

  const openPreorder = () => {
    setPreorderVisibility(styles.visible);
  };

  const closePreorder = () => {
    setPreorderVisibility(styles.notVisible);
  };
  useEffect(() => updateBackground('home'));

  return (
    <div className={styles.home}>
      <div className={styles.homeMainContent}>
        <h1>
          <span>SKYRIM </span> <br></br> <p>Daedric Collection</p>
        </h1>

        <button className={styles.preOrderBtn} onClick={openPreorder}>
          PREORDER
        </button>
      </div>
      <div
        className={`${styles.preorderMsgContainer} ${preorderVisibility}`}
        onClick={closePreorder}
      >
        <div className={styles.preorderContainer}>
          <button className={styles.closePreorderBtn} onClick={closePreorder}>
            Close
          </button>
          <p>
            Important Message: Since the Oblivion Crisis was resolved, the
            'production' of Daedric Hearts has been brought to an end.
            <span>Preorders will be delayed</span> until new portals to Oblivion
            are Opened. Thanks for your patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
