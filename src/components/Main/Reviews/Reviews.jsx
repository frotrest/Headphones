import styles from './reviews.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Reviews = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef([]);
  const reviews = [
    {
      reviewVideo:
        'https://www.youtube.com/watch?v=VqP11Ma_2Fk&ab_channel=Bose',
      reviewTitle:
        'Critically acclaimed for their powerful noise cancelling, astonishing sound, and unrivaled voice pickup, Bose Noise Cancelling Headphones 700 help turn any space into the perfect place to listen to music, get work done, or just shut out the world for a few moments and relax. ',
    },
    {
      reviewVideo:
        'https://www.youtube.com/watch?v=BUyLpf-u97Y&ab_channel=Bose',
      reviewTitle:
        'Bose Noise Cancelling Headphones 700 deliver everything you expect — and things you never imagined possible. The perfect balance of quiet, comfort, and sound.',
    },
    {
      reviewVideo:
        'https://www.youtube.com/watch?v=NgtznBDFRUo&ab_channel=Bose',
      reviewTitle:
        'Real stories of people tuning in or out to feel peace, find escape, and for self-care',
    },
  ];
  const stopAllVideos = () => {
    videoRefs.current.forEach((iframe) => {
      if (iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      }
    });
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    stopAllVideos();
  };
  return (
    <section className={clsx(styles.reviews)} id="reviews" data-animate="fadeInLeft">
      <Swiper
        modules={[Pagination, EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={false}
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <Container className={clsx(styles.reviewsContent)}>
              <h2 className={clsx(styles.reviewTitleMobile)}>Reviews</h2>
              <div className={clsx(styles.videoBox)}>
                <iframe
                  ref={(el) => (videoRefs.current[index] = el)}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.reviewVideo.split('v=')[1].split('&')[0]}?enablejsapi=1&origin=${window.location.origin}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className={clsx(styles.review)}>
                <h2 className={clsx(styles.reviewTitle)}>Reviews</h2>
                <div className={clsx(styles.reviewContent)}>
                  <h5 className={clsx(styles.reviewContentTitle)}>
                    Bose Сorporation
                  </h5>
                  <p className={clsx(styles.reviewContentDescription)}>
                    {item.reviewTitle}
                  </p>
                  <div className={styles.paginationContainer}>
                    {reviews.map((item, i) => (
                      <span
                        key={i}
                        className={clsx(
                          styles.bullet,
                          i === activeIndex && styles.bulletActive
                        )}
                        onClick={() => swiperInstance?.slideToLoop(i)}
                      >
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
