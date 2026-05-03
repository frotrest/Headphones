import styles from './faq.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import React from 'react';
import AccordionItem from './Accordion';

const FAQ = () => {
  const faqData = [
    {
      id: '01',
      q: 'How to pair with a mobile device?',
      a: 'To pair your headphones, turn them on and press the Bluetooth button...',
    },
    {
      id: '02',
      q: 'What is the wireless range of the Bose NC 700?',
      a: 'The range is up to 33 feet (10 meters) from the source device.',
    },
    {
      id: '03',
      q: 'How do I fold the Bose NC 700 headphones?',
      a: 'The earcups rotate to lay flat for easy storage in the provided case.',
    },
    {
      id: '04',
      q: 'Does the guarantee work internationally?',
      a: 'Yes, Bose offers a limited global warranty for all genuine products.',
    },
  ];
  return (
    <section className={clsx(styles.faq)} id="payment">
      <Container className={clsx(styles.faqContent)} dataAnimate="fadeInUp">
        <h2 className={clsx(styles.faqContentTitle)}>Faq</h2>
        <div className={clsx(styles.faqList)}>
          {faqData.map((item) => (
            <AccordionItem
              key={item.id}
              number={item.id}
              question={item.q}
              answer={item.a}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
