import React, { forwardRef, useRef } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Home.module.scss';
import logo from '../../assets/logo.png';
// import video from '../../assets/vide';

const Home = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className={classes['home']}>
        <div className={classes['video-bg']}></div>
        <div className={classes['container']}>
          <div className={classes['home__wrapper']}>
            <div className={classes['home__logo']}>
              <img src={logo} alt="" />
            </div>
            <div className={classes['home__text']}>
              <h2>Группа звездных огней для публичных мероприятий и концертов </h2>
              <FontAwesomeIcon
                onClick={handleClick}
                className={classes['home__icon']}
                icon={faChevronDown}
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className={classes['contact']}>
        <div className={classes['contact__inner']}>
          <a href="#!" className={classes['contact__item']}>
            Telefon
          </a>
          <a href="#!" className={classes['contact__item']}>
            Instagram
          </a>
          <a href="#!" className={classes['contact__item']}>
            Telegram
          </a>
          <a href="#!" className={classes['contact__item']}>
            Manzil
          </a>
        </div>

        <div className={classes['contact__logo']}>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default forwardRef(Home);
