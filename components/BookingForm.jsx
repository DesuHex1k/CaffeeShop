import React from 'react';

const BookingForm = () => (
    <div className="book content">
        <h1>Забронюйте стіл</h1>
        <form action="" className="form">
            <div className="grid">
                <input type="text" placeholder="Ваше ім'я" />
                <input type="email" placeholder="Електронна пошта" />
                <input type="tel" placeholder="Номер телефону" />
                <input type="date" defaultValue={new Date().toISOString().split('T')[0]}/>
                <select>
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
                <select>
                    <option>1 людина</option>
                    <option>2 людини</option>
                    <option>3 людини</option>
                    <option>4 людини</option>
                </select>
            </div>
        </form>
        <textarea placeholder="Ваше повідомлення..." rows="4" />
        <button type="submit" className='cartButton'>Забронювати</button>
    </div>
);

export default BookingForm; 