import { commerce } from "../lib/commerce";
import styles from '../styles/Shop.module.css';
// import Link from 'next/link';
import Product from "../components/Product";
import Footer from "../components/Footer";
import { useLayoutEffect } from "react";

export async function getStaticProps() {
    const { data } = await commerce.products.list();
  
    const products = data.filter(({ active }) => active);
  
    return {
      props: {
        products,
      },
      revalidate: 60,
    };
}

  

export default function Shop({ products }) { 
    // useLayoutEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);
    return (
        <div className={styles.shop__div1}>
            <div className={styles.shop__div2}>
                <div className={styles.shop__div3}>
                    <h1>NECKLACES</h1>
                </div>
                <div className={styles.shop__div4}>
                    {products.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

