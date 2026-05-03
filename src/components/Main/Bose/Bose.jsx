import styles from './bose.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import BoseImg from '@assets/bose.webp';
import React from 'react';

const Bose = () => {
  return (
    <section className={clsx(styles.bose)}>
      <Container className={clsx(styles.boseContent)} dataAnimate="fadeIn">
        <div className={clsx(styles.boseText)}>
          <h2 className={clsx(styles.boseTextTitle)}>Bose AR</h2>
          <div className={clsx(styles.boseTextCard)}>
            <h5 className={clsx(styles.boseTextCardTitle)}>
              Brand name technology
            </h5>
            <p className={clsx(styles.boseTextCardItem)}>
              Bose AR is a unique audio platform augmented reality, that opens
              before you new facets of sound. It allows you to stay connected to
              the real world and immerse yourself in the virtual universe at the
              same time.
            </p>
          </div>
        </div>
        <img
          src={BoseImg}
          alt="bose-img"
          className={clsx(styles.boseContentImg)}
          loading="lazy"
        />
      </Container>
    </section>
  );
};

export default Bose;
