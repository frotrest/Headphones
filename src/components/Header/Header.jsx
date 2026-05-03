import React, { useState } from 'react';
import styles from './header.module.css';
import clsx from 'clsx';
import Container from '../../Container';
import Logo from '@assets/logo.webp';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    {
      text: 'Characteristics',
      link: '#characteristics',
    },
    {
      text: 'History',
      link: '#history',
    },
    {
      text: 'Reviews',
      link: '#reviews',
    },
    {
      text: 'Payment and delivery',
      link: '#payment',
    },
  ];

  return (
    <header className={styles.header}>
      <Container className={styles.headerContent} dataAnimate="fadeIn">
        <img src={Logo} alt="logo" className={clsx(styles.logo)} />
        <nav className={styles.desktopNavBar}>
          {navLinks.map((item, index) => (
            <a href={item.link} className={clsx(styles.navBarItem)} key={index}>
              {item.text}
            </a>
          ))}
        </nav>
        <button className={clsx(styles.burgerBtn)} onClick={toggleMenu}>
          {isOpen ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
        </button>
        <div
          className={clsx(
            styles.mobileOverlay,
            isOpen && styles.mobileOverlayOpen
          )}
        >
          <div className={clsx(styles.mobileMenuHeader)}>
            <img src={Logo} alt="logo" className={clsx(styles.logo)} />
          </div>

          <nav className={clsx(styles.mobileNavLinks)}>
            {navLinks.map((item, index) => (
              <a
                href={item.link}
                className={clsx(styles.mobileItem)}
                key={index}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
