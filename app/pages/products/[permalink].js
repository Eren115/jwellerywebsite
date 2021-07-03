import { commerce } from "../../lib/commerce";
import React, { useLayoutEffect } from "react";
import styles from '../../styles/ProductPage.module.css';
import Typography from '@material-ui/core/Typography/Typography';
import Footer from '../../components/Footer';
import RelatedProducts from "../../components/RelatedProducts";

export async function getStaticProps({ params }) {
    const { permalink } = params;

    const product = await commerce.products.retrieve(permalink, {
        type: "permalink",
    });
    
    
    return {
        props: {
            product,
        },
    };
}

export async function getStaticPaths() {
    const { data: products} = await commerce.products.list();

    return {
        paths: products.map((product) => ({
            params: {
                permalink: product.permalink,
            },
        })),
        fallback: false,
    }
}


function ProductPage({ product }) {
    const {
        variant_groups: variantGroups,
        assets,
        meta,
        related_products: relatedProducts,
      } = product;
      const images = assets.filter(({ is_image }) => is_image);

      const initialVariants = React.useMemo(
        () =>
          variantGroups.reduce((all, { id, options }) => {
            const [firstOption] = options;
    
            return { ...all, [id]: firstOption.id };
          }, {}),
        [product.permalink]
      );
    
      const [selectedVariants, setSelectedVariants] = React.useState(
        initialVariants
      );
    
      React.useEffect(() => {
        setSelectedVariants(initialVariants);
      }, [product.permalink]);
    
      const handleVariantChange = ({ target: { id, value } }) =>
        setSelectedVariants({
          ...selectedVariants,
          [id]: value,
        });
    
    return (
      <div>
        <div className={styles.product__div1}>
        <div className={styles.product__div2} >
          <div className={styles.product__div3}>
            <div className={styles.product__div4}>
              {/* <img className={styles.product__img1} src /> */}
              {images.map(({id, url}) => (
               <div className={styles.product__div11} key={id}>
                 <img src={url} key={id} alt="" className={styles.product__img1} />
               </div>
             ))}
            </div>
            <div className={styles.product__div0}>
            <div className={styles.product__div5}>
              <div className={styles.product__div6}>
                  <h4>Necklaces</h4>
              </div>
              <div className={styles.product__div7}>
                <h1>{product.name}</h1>
              </div>
              <div className={styles.product__div8}>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
              <div className={styles.product__div9}>
                <h2>{product.price.formatted_with_symbol}</h2>
              </div>
              <div className={styles.product__div10}>
                <h2>Add To Cart</h2>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.product__line1}>You may also like!</h1>
      <RelatedProducts products={relatedProducts} />
      <Footer />
      </div>
    )
}


export default ProductPage

// <div>
        //     <h1>{product.name}</h1>
        //     <h1>I am productpage</h1>
        //     {images.map(({id, url}) => (
        //       <div>
        //         <img src={url} key={id} alt="" />
        //       </div>
        //     ))}
        // </div>