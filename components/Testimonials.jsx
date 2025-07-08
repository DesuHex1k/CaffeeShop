'use client';
import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        author: "ІГОР КОВАЛЕНКО",
        text: "Найкраща кава, яку я коли-небудь куштував! Дуже затишна атмосфера та приємний персонал. Рекомендую всім!",
    },
    {
        author: "СВІТЛАНА МЕЛЬНИК",
        text: "Дуже сподобалося обслуговування і вибір десертів. Тут завжди хочеться залишитися довше!",
    },
    {
        author: "ОЛЕНА ПЕТРЕНКО",
        text: "Дуже затишне місце з неймовірною атмосферою! Кава завжди свіжа та смачна, а персонал привітний і уважний. Обов'язково повернуся ще раз!",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(false);

    const handleChange = (direction) => {
        setFade(true);
        setTimeout(() => {
            setCurrent((prev) =>
                direction === 'next'
                    ? (prev + 1) % testimonials.length
                    : (prev - 1 + testimonials.length) % testimonials.length
            );
            setFade(false);
        }, 300);
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
