import React from 'react';
import styles from '../styles/Footer.module.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer__div1}>
            <div className={styles.footer__div2}>
                <div className={styles.footer__div3}></div>
                <div className={styles.footer__div4}>
                    <div className={styles.footer__div5}>
                        <div className={styles.footer__div6}>
                            <Link href="" className={styles.footer__link1}><h1>TITYARAVY</h1></Link>
                        </div>
                        <div className={styles.footer__div7}>
                            <h2>English <ExpandMoreIcon className={styles.footer__arrow1} /> </h2>
                        </div>
                    </div>
                    <div className={styles.footer__div8}>
                        <Link className={styles.footer__link1} href=""><h2>Imprint</h2></Link>
                        <Link className={styles.footer__link1} href=""><h2>Terms of sales</h2></Link>
                        <Link className={styles.footer__link1} href=""><h2>Contact</h2></Link>
                    </div>
                    <div className={styles.footer__div9}>
                        <Link className={styles.footer__link1} href=""><h2>Instagram</h2></Link>
                        <Link className={styles.footer__link1} href=""><h2>Facebook</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
