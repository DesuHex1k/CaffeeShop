"use client";
import React, { useRef, useState } from 'react';


const BookingForm = () => {
  const formRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = formRef.current;
    const data = {
      name: form[0].value,
      email: form[1].value,
      phone: form[2].value,
      date: form[3].value,
      time: form[4].value,
      people: form[5].value,
      message: form[6].value,
    };

    const res = await fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert('Бронь відправлена!');
      form.reset();
    } else {
      alert('Помилка відправки!');
    }
    setIsLoading(false);
  };

  return (
    <div className="book content">
      <h1>Забронюйте стіл</h1>
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <div className="grid">
          <input type="text" placeholder="Ваше ім'я" required />
          <input type="email" placeholder="Електронна пошта" required />
          <input type="tel" placeholder="Номер телефону" required />
          <input type="date" defaultValue={new Date().toISOString().split('T')[0]} required />
          <select required>
            <option>7:00</option>
            <option>8:00</option>
            <option>9:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
          </select>
          <select required>
            <option>1 людина</option>
            <option>2 людини</option>
            <option>3 людини</option>
            <option>4 людини</option>
          </select>
        </div>
        <textarea placeholder="Ваше повідомлення..." rows="4" />
        <button type="submit" className='cartButton' disabled={isLoading}>
          {isLoading ? 'Завантаження...' : 'Забронювати'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;