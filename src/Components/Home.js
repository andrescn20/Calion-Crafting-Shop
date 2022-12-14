import React, { useEffect, useState } from 'react';
import styles from '../Styles/home.module.scss';
import close from '../Images/close-black.png';

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

  const closePreorderEsc = (event) => {
    if ((event.key === 'Escape') & (preorderVisibility === styles.visible)) {
      closePreorder();
    }
  };

  return (
    <div className={styles.home} onKeyDown={closePreorderEsc}>
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
        <div className={`${styles.preorderPopUp} ${preorderVisibility}`}>
          <button className={styles.closePreorderBtn} onClick={closePreorder}>
            <img src={close} alt='Close Button' />
          </button>
          <p>
            <span>Important Message:</span> Since the Oblivion Crisis was
            resolved, the 'production' of Daedric Hearts has been brought to an
            end.
            <span> Preorders will be delayed</span> until new portals to
            Oblivion are Opened. Thanks for your patience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
