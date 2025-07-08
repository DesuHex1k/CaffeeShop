"use client";
import React, { useEffect, useState } from "react";
import styles from './page.module.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.name !== product.name);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrder();
  };

  const handleOrder = async () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, address, cart }),
    });

    const data = await res.json();
    if (res.ok) {
        alert('Заказ успешно создан!');
        localStorage.removeItem('cart');
        setCart([]);
    } else {
        alert('Ошибка: ' + data.error);
    }
};

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Кошик</h1>
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Кошик порожній.</p>
      ) : (
        <div className={styles.shopItems}>
          {cart.map((item, index) => (
            <div className={styles.shopItem} key={index}>
              <img src={item.image} alt={item.name} className={styles.shopImage} />
              <div className={styles.text}>
                <div className={styles.header}>
                  <h3>{item.name}</h3>
                  <span className={styles.price}>{item.price} грн</span>
                </div>
              </div>
              <button onClick={() => removeFromCart(item)} className={styles.cartButton}>
                Вилучити з кошика
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <form className={styles.cartForm} onSubmit={handleSubmit}>
          <h2>Оформлення замовлення</h2>
          <div className={styles.cartField}>
            <label htmlFor="name">Ім'я</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.cartInput}
            />
          </div>
          <div className={styles.cartField}>
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={styles.cartInput}
            />
          </div>
          <div className={styles.cartField}>
            <label htmlFor="address">Адреса</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className={styles.cartInput}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Підтвердити замовлення</button>
        </form>
      )}
    </div>
  );
};

export default CartPage; 