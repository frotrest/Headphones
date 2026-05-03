import React from 'react';
import Hero from './Hero/Hero';
import Benefits from './Benefits/Benefits';
import Description from './Description/Description';
import Luxury from './Luxury/Luxury';
import Bose from './Bose/Bose';
import Guarantees from './Guarantees/Guarantees';
import Brand from './Brand/Brand.jsx';
import Quote from './Quote/Quote';
import Reviews from './Reviews/Reviews';
import FAQ from './Faq/Faq';
import FeedBack from './Feedback/Feedback';

const Main = () => {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <Description />
        <Luxury />
        <Bose />
        <Guarantees />
        <Brand />
        <Quote />
        <Reviews />
        <FAQ />
        <FeedBack />
      </main>
    </>
  );
};

export default Main;
