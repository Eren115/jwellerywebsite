import React from 'react';
import styles from '../styles/About.module.css';
import Footer from '../components/Footer';
import Form from '../components/form';

function about() {
    return (
        <div className={styles.about__div0}>
        <div className={styles.about__div1}>
            <h1>This website is for design purpose only.</h1>
            <h1>We are not selling any jwellery over this website.</h1>
            <h1>This website also contain a checkout form as well as payment Gateway also</h1>
            <h1>For safety purpose I don't include them!!!</h1>
        </div>
        <div className={styles.about__div2}>
            <h1>Interseted in this website? Lets have a talk!!!</h1>
            <h1>Please Fill out the form or just contact us on our email!!!</h1>
            <Form />
            <div className={styles.about__div6}>
                <h2>Email :)</h2>
                <h1>radiuswebstudio@gmail.com</h1>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default about
