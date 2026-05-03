import styles from './quote.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import QuoteAuthor from '@assets/quote.webp';
import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Quote = () => {
  return (
    <section className={clsx(styles.quote)}>
      <Container
        className={clsx(styles.quoteContent)}
        dataAnimate="fadeInRight"
      >
        <img
          src={QuoteAuthor}
          alt="quote-img"
          className={clsx(styles.quoteContentImg)}
          loading="lazy"
        />
        <div className={clsx(styles.quoteText)}>
          <FaQuoteRight color="#DF3D3A" size={30} />
          <h2 className={clsx(styles.quoteTextTitle)}>
            Never stop dreaming. Always dream of the best, and think about how
            to achieve it.
          </h2>
          <p className={clsx(styles.quoteTextItem)}>
            Amar Bose is a company founder
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Quote;
