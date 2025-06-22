'use client';
import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        author: "CHARLES JUAREZ",
        text: "Aores autem accusamus magni doloribus qui nostrum tenetur dicta rem eveniet soluta voluptates inventore. Aesum dolorum fugiat sint. veritatis libero explicabo obcaecati voluptate, accusantium optio voluptatem.",
    },
    {
        author: "RAICHEL SMITH",
        text: "Mores autem accusamus magni doloribus qui nostrum tenetur dicta rem eveniet soluta voluptates inventore. Aesum dolorum fugiat sint. veritatis libero explicabo obcaecati voluptate, accusantium optio voluptatem.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);

    const handleChange = (direction) => {
        setFade(true); // старт анімації зникнення
        setTimeout(() => {
            setCurrent((prev) =>
                direction === 'next'
                    ? (prev + 1) % testimonials.length
                    : (prev - 1 + testimonials.length) % testimonials.length
            );
            setFade(false); // запуск з’явлення
        }, 300); // відповідно до transition у CSS
    };

    return (
        <section className={styles.section}>
            <div className={styles.slider}>
                <button onClick={() => handleChange('prev')} className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                </button>

                <div className={`${styles.card} ${fade ? styles.fadeOut : styles.fadeIn}`}>
                    <p className={styles.text}>{testimonials[current].text}</p>
                    <p className={styles.author}>- {testimonials[current].author}</p>
                    <div className={styles.quoteMark}>”</div>
                </div>

                <button onClick={() => handleChange('next')} className={styles.arrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
