import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className={styles.navbar__div1}>
            <div className={styles.navbar__div2}>
                <div className={styles.navbar__div3}>
                    <Link className={styles.navbar__link} href="/shop"><h3 className={styles.navbar__line1}>ESHOP</h3></Link>
                    <Link className={styles.navbar__link} href="/about"><h3 className={styles.navbar__line2}>ABOUT</h3></Link>
                    <Link className={styles.navbar__link} href=""><h3 className={styles.navbar__line3}>PLACES</h3></Link>
                </div>
                <div className={styles.navbar__div4}>
                    <Link href="/" className={styles.navbar__link}><h3 className={styles.navbar__line4}>TITYARAVY</h3></Link>
                </div>
                <div className={styles.navbar__div5}>
                    <Link href="" className={styles.navbar__link}><h3 className={styles.navbar__line5}>ACCOUNT</h3></Link>
                    <Link href="" className={styles.navbar__link}><h3 className={styles.navbar__line6}>CART ( 0 )</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
