import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ menuItems }) => (
    <div className={styles.menuPage}>
        <h1 className={styles.menuTitle}>Наше меню</h1>
        <div className={styles.menu}>
            {menuItems.map((item, index) => (
                <div className={styles.item} key={index}>
                    <img src={item.image} alt={item.name} className={styles.image} />
                    <div className={styles.text}>
                        <div className={styles.header}>
                            <h3>{item.name}</h3>
                            <span className={styles.price}>{item.price} грн</span>
                        </div>
                        <p className={styles.textP}>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Menu; 