// components/Hero.tsx
import React from 'react';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <p className={styles.heroSubtitle}>Welcome to my portfolio.<br />
           I'm a tech enthusiast who loves creating cool websites, apps, and<br />
            all things coding. Dive into my work, get to know my projects,<br />
             and see how I bring ideas to life through technology. <br />
             Whether you’re here for inspiration or collaboration, I’m <br />
             excited to share my journey with you!</p>
      </div>
    </section>
  )
}
export default Hero;
