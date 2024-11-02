import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <h1 className={styles.title}> About me</h1>
      <p className={styles.text}>we provide the best solutions </p>
      <Footer></Footer>
    </div>
  )
}

export default About
