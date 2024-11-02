// pages/index.tsx
import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Hero from '../components/Hero';
import styles from "./style/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Header />

      

      <h1 className={styles.title}>Fatima Gohar</h1> 
      <Hero />
      <Footer /> 
    </div>
  );
};

export default HomePage;
