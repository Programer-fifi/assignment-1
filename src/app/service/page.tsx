import React from 'react';
import Link from 'next/link';
import styles from './service.module.css';

const Service = () => {
  return (
    <div className={styles.container}>
      
      
      <h1 className={styles.title}>Services</h1>
      <p className={styles.text}>I will be offering a variety of services soon !</p>
      
      <ul className={styles.navList}>
      <li className={styles.navItem}>
        <Link href="/service/webdev"> Web Development
         page</Link></li>
         <li className={styles.navItem}><Link  href="/service/appdev">App Development
         page</Link></li>
      </ul>
    </div>
  )
}
export  default Service
