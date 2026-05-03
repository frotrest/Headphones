import styles from './brand.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import BrandImg from '@assets/author.webp';
import React from 'react';

const Brand = () => {
  const guarantees = [
    'The history of Bose Corporation began with disappointment. In 1956, MIT graduate student Amar Bose bought one of the best stereo systems at the time for his home. After a few minutes of listening to the audio recording, his bewilderment turned disappointment. ',
    "From Amar's point of view, the sound was so flat and unnatural that it was better not to listen to the music at all than to listen to it in such a distorted form.",
  ];
  return (
    <section className={clsx(styles.brand)} id="history">
      <Container className={clsx(styles.brandContent)} dataAnimate="fadeInLeft">
        <div className={clsx(styles.brandText)}>
          <h2 className={clsx(styles.brandTextTitle)}>
            brand creation history
          </h2>
          <div className={clsx(styles.brandTextParagraphs)}>
            {guarantees.map((item, index) => (
              <p key={index} className={clsx(styles.brandParagraph)}>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className={clsx(styles.brandImgs)}>
          <img
            src={BrandImg}
            alt="brand-img"
            className={clsx(styles.brandImgsImg)}
            loading="lazy"
          />
          <h5 className={clsx(styles.brandImgsTitle)}>
            Bose's frustration grew into a firm determination to build audio
            equipments that would reproduce sound with impeccable accuracy and
            naturalness
          </h5>
        </div>
      </Container>
    </section>
  );
};

export default Brand;
