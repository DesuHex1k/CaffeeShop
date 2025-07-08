import React from 'react';
import styles from './Booking.module.css';
import BookingForm from '../../components/BookingForm';
import '../pageHome.css'

const Booking = () => (
    <div className={styles.bookingPage}>
        <BookingForm />
        <div className={styles.bookingHero}>
            <h1 className={styles.bookingTitle}>У нас затишно та смачно!</h1>
        </div>
    </div>
);

export default Booking;
