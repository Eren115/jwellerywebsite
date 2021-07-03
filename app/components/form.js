import React, { useState } from 'react';
import styles from '../styles/About.module.css';
import db from './firebases';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert('Message has been sent...');
        })
        .catch((error) => {
            alert(error.message);
        });

        setName('');
        setEmail('');
        setMessage('');
    };
    // npm install --save react@16 react-dom@16
    return (
        <form className={styles.about__form} onSubmit={handleSubmit}>
            <div className={styles.about__div3}>
                <input placeholder="Your Name" className={styles.about__input1} value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Your Email" className={styles.about__input2} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
                <div className={styles.about__div5}>
                    <textarea placeholder="Any other message for us" className={styles.about__input3} value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className={styles.contact__button} type="submit"><h1>Submit</h1></button>
        </form>
    )
}

export default Form
