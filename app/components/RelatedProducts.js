import React, { useLayoutEffect } from 'react';
import Product from './Product';
import styles from '../styles/RelatedProducts.module.css';
import SecondProduct from './SecondProduct';

function RelatedProducts({ products }) {
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    //   }, []);
    return (
        <div className={styles.realeatedProduct__div1}>
            {/* {products.map((product) => (
                <Product key={product.id}
                product={product} />
            ))} */}
            
            {products.map((product) => (
                <SecondProduct key={product.id}
                product={product} />
            ))}
        </div>
    )
}

export default RelatedProducts
