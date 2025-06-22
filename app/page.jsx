import React from 'react';
import './pageHome.css'
import Image from "next/image";
import Testimonials from "../components/Testimonials";

const Page = () => {
    const menuItems = [
        {
            name: 'Caffe Macchiato',
            description: 'Shot of espresso extracted the Italian way.',
            price: 65,
            image: 'https://static.vecteezy.com/system/resources/previews/029/345/013/original/macchiato-coffee-isolated-on-transparent-background-ai-generative-free-png.png',
        },
        {
            name: 'Caffe Latte',
            description: 'Espresso and steamed milk with foamed.',
            price: 70,
            image: 'https://www.pngarts.com/files/1/Cafe-Latte-PNG-Image.png',
        },
        {
            name: 'Espresso Macchiato',
            description: 'Espresso marked with foamed milk.',
            price: 75,
            image: 'https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-espresso-macchiato-coffee-drink-with-foamed-milk-png-image_11520214.png',
        },
        {
            name: 'Caffe Americano',
            description: 'Espresso topped with hot water.',
            price: 68,
            image: 'https://static.vecteezy.com/system/resources/previews/023/438/445/non_2x/espresso-coffee-cutout-free-png.png',
        },
        {
            name: 'Hot Chocolate',
            description: 'Real chocolate blended with steamed milk.',
            price: 75,
            image: 'https://static.vecteezy.com/system/resources/previews/028/174/738/original/cup-of-hot-chocolate-with-cream-isolated-on-transparent-background-generative-ai-png.png',
        },
        {
            name: 'Strawberry Milk',
            description: 'Real Strawberry blended with steamed milk.',
            price: 65,
            image: 'https://th.bing.com/th/id/R.50b8c69584ce0c55986f91b565dfe78e?rik=xtp54tNzSPHEZQ&pid=ImgRaw&r=0',
        },
        {
            name: 'Asian Lemon Tea',
            description: 'Ask your Barista about our selection of teas.',
            price: 60,
            image: 'https://static.vecteezy.com/system/resources/previews/038/370/243/non_2x/ai-generated-iced-lemon-tea-isolated-on-transparent-background-png.png',
        },
        {
            name: 'Black Asian Tea',
            description: 'A blend of black tea, spices, honey and milk.',
            price: 75,
            image: 'https://static.vecteezy.com/system/resources/previews/016/349/669/non_2x/cup-of-tea-with-fresh-tea-leaves-on-saucer-transparant-background-png.png',
        },
    ];

    const products = [
        {
            name: 'American coffee',
            price: 75,
            image: 'https://unblast.com/wp-content/uploads/2018/08/Coffee-Package-Mockup-PSD-aa.jpg',
        },
        {
            name: 'Cost Rica Light',
            price: 85,
            image: 'https://th.bing.com/th/id/R.95c8bf6dd5c1c0fd8deda62b67fda384?rik=sQaCZ3fXDNjLgA&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2018%2f08%2fCoffee-Package-Mockup.jpg&ehk=SVeoZH0KWTzZo4wamMNyd3vlame2QEwrM646trzNZxw%3d&risl=&pid=ImgRaw&r=0',
        },
        {
            name: 'Jamaican Mountain',
            price: 65,
            image: 'https://unblast.com/wp-content/uploads/2018/08/Coffee-Package-Mockup-PSD-aa.jpg',
        },
        {
            name: 'Ethopian Fancy',
            price: 75,
            image: 'https://th.bing.com/th/id/R.95c8bf6dd5c1c0fd8deda62b67fda384?rik=sQaCZ3fXDNjLgA&riu=http%3a%2f%2funblast.com%2fwp-content%2fuploads%2f2018%2f08%2fCoffee-Package-Mockup.jpg&ehk=SVeoZH0KWTzZo4wamMNyd3vlame2QEwrM646trzNZxw%3d&risl=&pid=ImgRaw&r=0',
        }
    ]
    return (
        <div className="page">
            <div className="about content">
                <h1>Найкраща кава в місті</h1>
                <h2>Завітай до нас, та переконайся</h2>

                <div className="bottom">
                    <div>
                        <h2>
                            Часи роботи
                        </h2>
                        <p>
                            ПН - СБ : 7:00 - 20:00
                        </p>
                    </div>
                    <div>
                        <Image src='/Coffee-Cup.png' alt="Coffee-Cup" width={336} height={522} />
                    </div>

                    <div>
                        <h2>
                            Забронювати стіл
                        </h2>
                        <p>
                            Тел: +380689344342
                        </p>
                    </div>
                </div>
            </div>

            <div className="story content">
                <h1>Наша історія</h1>

                <h2>
                    Ідея створити кафе виникла з простого бажання — поділитися любов’ю до якісної кави та затишної атмосфери. Ми хотіли створити місце, де кожен почуватиметься комфортно: чи то на короткій перерві, чи за довгою розмовою.

                    Все почалося з невеликого приміщення, бажання працювати чесно і з душею. Ми самі обирали кожну деталь інтер’єру, експериментували зі смаками, шукали свій підхід до кожного гостя.

                    Сьогодні наше кафе — це більше, ніж просто кава. Це історія, яку ми пишемо разом з вами.
                </h2>
            </div>

            <div className="menu_page">
                <h1>Наше меню</h1>
                <div className="menu content">
                    {menuItems.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.image} alt={item.name} className="image" />
                            <div className="text">
                                <div className="header">
                                    <h3>{item.name}</h3>
                                    <span className="price">{item.price} грн</span>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="shop content">
                <h1>Наші продукти</h1>
                <div className="shopItems">
                    {products.map((item, index) => (
                        <div className="shopItem" key={index}>
                            <img src={item.image} alt={item.name} className="shopImage" />
                            <div className="text">
                                <div className="header">
                                    <h3>{item.name}</h3>
                                    <span className="price">{item.price} грн</span>
                                </div>
                            </div>
                            <button className='cartButton'>До кошику</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="book_page">
                <div className="book content">
                    <h1>Заброннюй стіл</h1>
                    <form action="" className="form">
                        <div className="grid">
                            <input type="text" placeholder="Ваше ім'я" />
                            <input type="email" placeholder="Електронна пошта" />
                            <input type="tel" placeholder="Номер телефона" />
                            <input type="date" placeholder="MM/DD/YYYY" />
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
                                <option>01 Людина</option>
                                <option>02 Людини</option>
                                <option>03 Людини</option>
                                <option>04 Людини</option>
                            </select>
                        </div>
                    </form>

                    <textarea placeholder="Ваше повідомлення..." rows="4" />

                    <button type="submit" className='cartButton'>Забронювати</button>
                </div>
            </div>

            <div className="shop content">
                <h1>Відгуки</h1>
                <Testimonials/>
            </div>
        </div>
    );
};

export default Page;