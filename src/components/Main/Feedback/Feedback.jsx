import styles from './feedback.module.css';
import clsx from 'clsx';
import Container from '../../../Container';
import React, { useState } from 'react';
import WorkSpace from '@assets/workspace.webp';

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className={clsx(styles.checkboxContainer)}>
      <input
        type="checkbox"
        className={clsx(styles.hiddenInput)}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={clsx(styles.customCheck)}></span>
      {label && <span className={clsx(styles.labelText)}>{label}</span>}
    </label>
  );
};

const FeedBack = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      setError(true);
      return;
    }
    setError(false);
    alert(`Data: ${name}, ${email}, ${comment}`);
    setName('');
    setEmail('');
    setComment('');
    setAgreed(false);
  };
  return (
    <section className={clsx(styles.feedBack)}>
      <img
        src={WorkSpace}
        alt="workspace"
        className={clsx(styles.feedBackImg)}
      />
      <Container className={clsx(styles.feedBackContent)} dataAnimate="fadeInRight">
        <div className={clsx(styles.feedBackText)}>
          <h2 className={clsx(styles.feedBackTextTitle)}>Feedback</h2>
          <p className={clsx(styles.feedBackTextItem)}>
            We'll help you find the right headphones for you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className={clsx(styles.feedBackForm)}>
          <input
            type="text"
            value={name}
            placeholder="Your name"
            className={clsx(styles.feedBackFormItem)}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            className={clsx(styles.feedBackFormItem)}
            required
          />
          <textarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="Send us a message"
            value={comment}
            className={clsx(styles.feedBackFormComment)}
          ></textarea>
          <CustomCheckbox
            checked={agreed}
            onChange={(val) => {
              setAgreed(val);
              if (val) setError(false);
            }}
            label="I agree to the privacy policy"
          />
          {error && (
            <p className={clsx(styles.errorText)}>
              Please accept the privacy policy
            </p>
          )}
          <button type="submit" className={clsx(styles.feedBackFormBtn)}>
            Send
          </button>
        </form>
      </Container>
    </section>
  );
};

export default FeedBack;
