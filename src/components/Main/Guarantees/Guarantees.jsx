import styles from './guarantees.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import GuaranteesImg from '@assets/white-headphones.webp';
import React from 'react';

const Guarantees = () => {
  const guarantees = [
    {
      title: '90 Day Money Back Guarantee',
      description:
        'If you are not 100% satisfied with a product, you can return it back for a full refund.',
    },
    {
      title: '1 year warranty',
      description:
        'Regardless of your country of residence, if your headphones are broken, we will send you new ones.',
    },
  ];
  return (
    <section className={clsx(styles.guarantees)}>
      <Container className={clsx(styles.guaranteesContent)} dataAnimate="fadeInUp">
        <img
          src={GuaranteesImg}
          alt="guarantees-img"
          className={clsx(styles.guaranteesContentImg)}
          loading="lazy"
        />
        <div className={clsx(styles.guaranteesText)}>
          <h2 className={clsx(styles.guaranteesTextTitle)}>Guarantees</h2>
          <div className={clsx(styles.guaranteesCards)}>
            {guarantees.map((item, index) => (
              <div key={index} className={clsx(styles.guaranteesCard)}>
                <h5 className={clsx(styles.guaranteesCardTitle)}>
                  {item.title}
                </h5>
                <p className={clsx(styles.guaranteesCardItem)}>
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

export default Guarantees;
