import React from 'react';
import '../../components/Shop';
import './pageShop.css';

const products = [
    {
        name: 'Американська',
        price: 75,
        image: 'https://unblast.com/wp-content/uploads/2018/08/Coffee-Package-Mockup-PSD-aa.jpg',
    },
    {
        name: 'Коста-Ріка Лайт',
        price: 85,
        image: 'https://th.bing.com/th/id/R.95c8bf6dd5c1c0fd8deda62b67fda384?rik=sQaCZ3fXDNjLgA&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2018%2f08%2fCoffee-Package-Mockup.jpg&ehk=SVeoZH0KWTzZo4wamMNyd3vlame2QEwrM646trzNZxw%3d&risl=&pid=ImgRaw&r=0',
    },
    {
        name: 'Ямайська гора',
        price: 65,
        image: 'https://unblast.com/wp-content/uploads/2018/08/Coffee-Package-Mockup-PSD-aa.jpg',
    },
    {
        name: 'Ефіопська кава',
        price: 75,
        image: 'https://th.bing.com/th/id/R.95c8bf6dd5c1c0fd8deda62b67fda384?rik=sQaCZ3fXDNjLgA&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2018%2f08%2fCoffee-Package-Mockup.jpg&ehk=SVeoZH0KWTzZo4wamMNyd3vlame2QEwrM646trzNZxw%3d&risl=&pid=ImgRaw&r=0',
    }
]

import Shop from '../../components/Shop';

const ShopPage = () => (
    <div className="shopPage">
        <Shop products={products} />
        <div className="shopHero">
            <h1 className="shopTitle">
                Ласкаво просимо до нашого магазину!
            </h1>
        </div>
    </div>
);

export default ShopPage; 