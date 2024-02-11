import React, { forwardRef, useRef } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import classes from './Home.module.scss';
import logo from '../../assets/logo.png';
// import video from '../../assets/vide';

const Home = () => {
  const AnimateItemLeft = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.9 },
    }),
  };

  const TeaxtAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const ItemAnimationLeft = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  const ItemAnimationRight = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.1 },
    }),
  };
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
        className={classes['home']}>
        <div className={classes['video-bg']}></div>
        <div className={classes['container']}>
          <div className={classes['home__wrapper']}>
            <motion.div variants={AnimateItemLeft} className={classes['home__logo']}>
              <img src={logo} alt="" />
            </motion.div>
            <div className={classes['home__text']}>
              <motion.h2 custom={2} variants={TeaxtAnimation}>
                Группа звездных огней для публичных мероприятий и концертов{' '}
              </motion.h2>
              <FontAwesomeIcon
                onClick={handleClick}
                className={classes['home__icon']}
                icon={faChevronDown}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        viewport={{ amount: 0.3, once: true }}
        initial="hidden"
        whileInView="visible"
        ref={ref}
        className={classes['contact']}>
        <div className={classes['contact__inner']}>
          <motion.a
            custom={1}
            variants={ItemAnimationRight}
            href="#!"
            className={classes['contact__item']}>
            Telefon
          </motion.a>
          <motion.a
            custom={1}
            variants={ItemAnimationLeft}
            href="#!"
            className={classes['contact__item']}>
            Instagram
          </motion.a>
          <motion.a
            custom={1}
            variants={ItemAnimationRight}
            href="#!"
            className={classes['contact__item']}>
            Telegram
          </motion.a>
          <motion.a
            custom={1}
            variants={ItemAnimationLeft}
            href="#!"
            className={classes['contact__item']}>
            Manzil
          </motion.a>
        </div>

        <div className={classes['contact__logo']}>
          <img src={logo} alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default forwardRef(Home);
