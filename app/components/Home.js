import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Footer from './Footer';

const Home = () => {
    return (
        <div className={styles.home__div1}>
            <div className={styles.home__div2}>
                <Link href="/shop" className={styles.home__link1}>
                    <div className={styles.home__div3}>
                        <div className={styles.home__div4}>
                            <h1>NEW</h1>
                            <h1 className={styles.home__line2}>COLLECTION</h1>
                            <h1 className={styles.home__line3}>2021</h1>
                        </div>
                        <div className={styles.home__div5}>
                            <div className={styles.home__div6}>
                                <img src="https://images.prismic.io/tityaravy/0f38be98-6094-43ce-8079-69b83a3c55c8_TR-849_bis.jpg?auto=compress,format&rect=0,15,1440,1887&w=390&h=511" className={styles.home__img1}  />
                            </div>
                        </div>
                    </div>
                </Link>
                <div className={styles.home__div7}>
                    <h1>Inspired by her multi-ethnic life, Titya</h1>
                    <h1>creates fine jewelry from treasured</h1>
                    <h1>materials to share her wonderful</h1>
                    <h1>tales...</h1>
                </div>
                <Link href="">
                    <div className={styles.home__div8}>
                        <div className={styles.home__div9}>
                            <img src="https://images.prismic.io/tityaravy/c78caead-5b6d-47d5-8cac-3e472d30b9b2_home-02.jpg?auto=compress,format&rect=0,0,390,511&w=390&h=511" className={styles.home__img2} />
                        </div>
                        <div className={styles.home__div10}>
                            <div className={styles.home__div11}>
                                <h1>THE HISTORY</h1>
                            </div>
                            <div className={styles.home__div12}>
                                <p className={styles.home__para1}>Titya’s inspiration is all very personal and one of a kind. She listens to her heart and follows her instinct combining the Cambodian inheritance of a Parisian girl to the Indo-Mauritian culture of her beloved husband. The result is simply enchanting! Titya’s jewels ally delicacy and power.</p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href="" className={styles.home__link1}>
                    <div className={styles.home__div13}>
                        <div className={styles.home__div4}>
                            <h1 className={styles.home__line2}>BRACELETS</h1>
                            <h1 className={styles.home__line3}>COLLECTION</h1>
                        </div>
                        <div className={styles.home__div5}>
                            <div className={styles.home__div14}>
                                <img src="https://images.prismic.io/tityaravy/c06f70cd-ee19-412d-a6d6-3bbb88ca4630_TR-093_bis.jpg?auto=compress,format&rect=0,15,1440,1887&w=390&h=511" className={styles.home__img1}  />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Home
// rgb(190, 189, 170)