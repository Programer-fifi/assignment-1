import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <h1 className={styles.title}>contact</h1>
      <p className={styles.text}>contact at<br /> <FaPhoneAlt /> 123-456-7890</p>
      <Footer></Footer>
    </div>
  )
}

export default Contact
