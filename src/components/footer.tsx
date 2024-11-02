// components/Footer.tsx
import React from 'react';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
       <p>&copy; 2024 My Portfolio. All rights reserved.</p>
       <p>Stay connected for more updates!</p>
    </footer>
  ); 
};

export default Footer;
