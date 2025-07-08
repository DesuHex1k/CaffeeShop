import React from 'react';
import styles from './Shop.module.css';

const Shop = ({ products }) => (
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
                    <button className={styles.cartButton}>До кошика</button>
                </div>
            ))}
        </div>
    </div>
);

export default Shop; 