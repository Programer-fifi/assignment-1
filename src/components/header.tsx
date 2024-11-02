// components/Header.tsx
import styles from './header.module.css';
import Link from "next/link";
import { TbAffiliate } from "react-icons/tb";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <TbAffiliate className={styles.logo}/>
      <h1 className={styles.title}>Portfolio</h1>

      </div>
      
      

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/service">Service</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
