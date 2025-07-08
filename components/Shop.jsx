"use client";
import React, { useEffect, useState } from 'react';
import styles from './Shop.module.css';



const Shop = ({ products }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart); // обновляем состояние
    }
    
    const removeFromCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => item.name !== product.name);
        localStorage.setItem("cart", JSON.stringify(cart));
        setCart(cart); // обновляем состояние
    }
    
    
    
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);
    return (
    <div className={styles.shop + ' content'}>
        <h1>Наші продукти</h1>
        <div className={styles.shopItems}>
            {products.map((item, index) => (
                <div className={styles.shopItem} key={index}>
                    <img src={item.image} alt={item.name} className={styles.shopImage} />
                    <div className={styles.text}>
                        <div className={styles.header}>
                            <h3>{item.name}</h3>
                            <span className={styles.price}>{item.price} грн</span>
                        </div>
                    </div>
                    {cart.some(element => element.name === item.name) ? (
    <button onClick={() => removeFromCart(item)} className={styles.cartButton}>
        Вилучити з кошика
    </button>
) : (
    <button onClick={() => addToCart(item)} className={styles.cartButton}>
        До кошика
    </button>
)}
                </div>
            ))}
        </div>
    </div>
    );
}

export default Shop; 