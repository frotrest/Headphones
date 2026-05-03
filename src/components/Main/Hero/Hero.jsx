import styles from './hero.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import Headphones from '@assets/headphones.webp';
import React from 'react';

const Hero = () => {
  return (
    <section className={clsx(styles.hero)}>
      <Container className={clsx(styles.heroContent)} dataAnimate="fadeIn">
        <div className={clsx(styles.heroText)}>
          <div className={clsx(styles.heroSubTitles)}>
            <h5 className={clsx(styles.heroContentSubTitle)}>
              Noise cancellation headphones that are capable for a lot of things
            </h5>
            <h5 className={clsx(styles.heroContentSubTitle)}>
              Up to 20 hours of playback
            </h5>
          </div>
          <h1 className={clsx(styles.heroTextTitle)}>Headphones Bose NC 700</h1>
          <button className={clsx(styles.heroTextBtn)}>Order</button>
        </div>
        <img
          src={Headphones}
          alt="headphones"
          fetchPriority="high"
          className={clsx(styles.heroContentImg)}
        />
      </Container>
    </section>
  );
};

export default Hero;
