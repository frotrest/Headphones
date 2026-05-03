import React from 'react';
import styles from './footer.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import Logo from '@assets/logo.webp';

const Footer = () => {
  const footerColumns = [
    ['Characteristics', 'History', 'Reviews'],
    ['Payment and delivery', 'Store addresses', 'FAQ'],
  ];
  return (
    <header className={clsx(styles.footer)}>
      <Container className={clsx(styles.footerContent)} dataAnimate="fadeIn">
        <nav className={clsx(styles.footerBar)}>
          {footerColumns.map((column, columnIndex) => (
            <div className={clsx(styles.footerColumn)} key={columnIndex}>
              {column.map((item, itemIndex) => (
                <a href="#" className={styles.footerBarItem} key={itemIndex}>
                  {item}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <a href="tel:+8801111111" className={clsx(styles.footerContentItem)}>
          8 (800) 111-11-11
        </a>
      </Container>
    </header>
  );
};

export default Footer;
