import React from "react";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Verification.module.css';
import { useRouter } from 'next/router';



function Verification() {
    const router = useRouter();


    // Ishlidigan verification page
    const [code, setCode] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        if (timer === 0) return;

        const countdown = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);

    const handleChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        setCode((prev) => {
            const next = [...prev];
            next[index] = value.slice(0, 1);
            return next;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const verificationCode = code.join('');

        // Tasdiqlash kodida faqat sonlarni ishlatishni tekshirish
        if (!/^\d{4}$/.test(verificationCode)) {
            alert('Iltimos, to`g`ri formatdagi tasdiqlash kodini kiriting');
            return;
        }

        window.location.href = '/';


    };

    return (

        // Ishlidigan verification page
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Verification Code</h1>
                <p className={styles.description}>
                    Telefoningizga yuborgan 4 xonali tasdiqlash kodini kiriting.
                </p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="verification-code" className="sr-only">
                        Tasdiqlash codi
                    </label>
                    <div className={styles.inputContainer}>
                        {Array.from({ length: 4 }, (_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={code[index]}
                                onChange={(event) => handleChange(index, event.target.value)}
                                className={styles.input}
                            />
                        ))}
                    </div>
                    <button type="submit" className={styles.button} disabled={timer === 0}>
                        Verify
                    </button>
                </form>
            </main>
            <footer className={styles.footer}>
                {timer > 0 ? (
                    <p>Resend in {timer}s</p>
                ) : (
                    <button type="button" onClick={() => setTimer(60)}>
                        Resend
                    </button>
                )}
            </footer>
        </div>
    );
}


export default Verification;