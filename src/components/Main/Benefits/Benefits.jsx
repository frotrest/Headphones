import styles from './benefits.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import Listener from '@assets/listener.webp';
import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: '11 levels of noise reduction',
      description:
        'With the new Bose Noise Canceling Headphone 700, you can smoothly increase or decrease the level of noise cancellation. You can be heard perfectly and you hear the interlocutor clearly, even in a noisy environment!',
    },
    {
      title: 'Comfort up to max level',
      description:
        'Stylish, lightweight stainless steel headband with soft, angled cups of headphones for comfortable seating. The inner side is made of soft gel lining that fits well to the head.!',
    },
  ];
  return (
    <section className={clsx(styles.benefits)}>
      <Container
        className={clsx(styles.benefitsContent)}
        dataAnimate="fadeInRight"
      >
        <img
          src={Listener}
          alt="listener"
          className={clsx(styles.benefitsContentImg)}
          loading="lazy"
        />
        <div className={clsx(styles.BenefitsText)}>
          <h2 className={clsx(styles.BenefitsTextTitle)}>
            Premium design and comfort
          </h2>
          <div className={clsx(styles.BenefitsTextSubTitles)}>
            {benefits.map((item, index) => (
              <div key={index} className={clsx(styles.BenefitsTextCard)}>
                <h2 className={clsx(styles.BenefitsTextCardTitle)}>
                  {item.title}
                </h2>
                <p className={clsx(styles.BenefitsTextCardItem)}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
