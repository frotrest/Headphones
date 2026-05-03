import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './faq.module.css';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineQuestionMark } from 'react-icons/md';

const AccordionItem = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        styles.accordionItem,
        isOpen && styles.accordionItemActive
      )}
    >
      <div
        className={clsx(styles.headerAccordion)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={clsx(styles.number)}>{number}</span>
        <h4 className={clsx(styles.question)}>{question}</h4>
        <div className={clsx(styles.iconBox)}>
          <span className={clsx(styles.icon)}>
            {isOpen ? (
              <RxCross2 size={20} color="white" />
            ) : (
              <MdOutlineQuestionMark color="white" size={20} />
            )}
          </span>
        </div>
      </div>
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.answerText)}>{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
