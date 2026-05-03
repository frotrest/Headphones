import styles from './luxury.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import SunRise from '@assets/sunrise.webp';
import React from 'react';

const Luxury = () => {
  const headPhonesTips = [
    {
      title: 'Maximum enjoyment',
      description:
        'In order to create a comfortable atmosphere - raise the level by level from the "transparent" mode to the maximum blocking of sounds. The conversation mode can be activated in one click using a special button.',
    },
    {
      title: 'Crystal sound',
      description:
        'The speaker system and brand name active equalizer are able to provide high-quality and powerful sound at any volume level. You can be sure of no distortion and crystal clear at high and low frequencies.',
    },
  ];
  return (
    <section className={clsx(styles.luxury)}>
      <img
        src={SunRise}
        alt="sunrise"
        className={clsx(styles.luxuryContentImg)}
        loading="lazy"
      />
      <Container className={clsx(styles.luxuryContent)} dataAnimate="fadeInUp">
        <div className={clsx(styles.luxuryCards)}>
          {headPhonesTips.map((item, index) => (
            <div key={index} className={clsx(styles.luxuryCard)}>
              <h5 className={clsx(styles.luxuryCardTitle)}>{item.title}</h5>
              <p className={clsx(styles.luxuryCardItem)}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Luxury;
