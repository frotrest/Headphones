import styles from './description.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import React from 'react';

const Description = () => {
  const featureGroups = [
    {
      id: 'basic',
      items: [
        { id: 1, text: 'Ability to receive calls' },
        { id: 2, text: 'Rich and powerful sound' },
        { id: 3, text: 'Active noise cancellation option' },
      ],
    },
    {
      id: 'advanced',
      items: [
        { id: 4, text: 'Unsurpassed microphone system' },
        { id: 5, text: 'Support of voice assistants' },
        { id: 6, text: 'Bose AR Augmented Reality Audio Platform' },
      ],
    },
  ];
  return (
    <section className={clsx(styles.description)} id="characteristics">
      <Container
        className={clsx(styles.descriptionContent)}
        dataAnimate="fadeInLeft"
      >
        <h2 className={clsx(styles.descriptionContentTitle)}>
          capable of so much
        </h2>
        <div className={clsx(styles.descriptionLists)}>
          {featureGroups.map((group) => (
            <ul key={group.id} className={clsx(styles.descriptionList)}>
              {group.items.map((item) => (
                <li key={item.id} className={styles.descriptionListItem}>
                  {item.text}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <h2 className={clsx(styles.luxuryContentTitle)}>
          The luxury of silence
        </h2>
      </Container>
    </section>
  );
};

export default Description;
