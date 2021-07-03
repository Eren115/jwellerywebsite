import React from 'react';
import styles from '../styles/SecondProduct.module.css';
import Link from 'next/link';

const SecondProduct = ({ product }) => {
    const img = `url(${product.media.source})`
    return (
        <div className={styles.secondProduct__div5}>
        <div className={styles.secondProduct__div6}>
            <Link href={`/products/${product.permalink}`}><div className={styles.secondProduct__div9} style={{backgroundImage: img}}></div></Link>
        </div>
        <div className={styles.secondProduct__div7}>
            <Link href={`/products/${product.permalink}`}>
                <div className={styles.secondProduct__div8}>
                    <h2>{product.name}</h2>
                    <h3>{product.price.formatted_with_symbol}</h3>
                </div>
            </Link>
        </div>
        </div>
    )
}

export default SecondProduct
