import React, { useLayoutEffect } from 'react';
import styles from '../styles/Shop.module.css';
import Link from 'next/link';

const Product = ({ product }) => {
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);
    const img = `url(${product.media.source})`
    return (
        <div className={styles.shop__div5}>
        <div className={styles.shop__div6}>
            <Link href={`/products/${product.permalink}`}><div className={styles.shop__div9} style={{backgroundImage: img}}></div></Link>
        </div>
        <div className={styles.shop__div7}>
            <Link href={`/products/${product.permalink}`}>
                <div className={styles.shop__div8}>
                    <h2>{product.name}</h2>
                    <h3>{product.price.formatted_with_symbol}</h3>
                </div>
            </Link>
        </div>
        </div>
    )
}

export default Product
