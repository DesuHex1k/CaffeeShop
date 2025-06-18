import React from 'react';
import './pageHome.css'
import Image from "next/image";

const Page = () => {
    const menuItems = [
        {
            name: 'Caffe Macchiato',
            description: 'Shot of espresso extracted the Italian way.',
            price: 15,
            image: 'https://static.vecteezy.com/system/resources/previews/029/345/013/original/macchiato-coffee-isolated-on-transparent-background-ai-generative-free-png.png',
        },
        {
            name: 'Caffe Latte',
            description: 'Espresso and steamed milk with foamed.',
            price: 20,
            image: 'https://www.pngarts.com/files/1/Cafe-Latte-PNG-Image.png',
        },
        {
            name: 'Espresso Macchiato',
            description: 'Espresso marked with foamed milk.',
            price: 25,
            image: 'https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-espresso-macchiato-coffee-drink-with-foamed-milk-png-image_11520214.png',
        },
        {
            name: 'Caffe Americano',
            description: 'Espresso topped with hot water.',
            price: 18,
            image: 'https://static.vecteezy.com/system/resources/previews/023/438/445/non_2x/espresso-coffee-cutout-free-png.png',
        },
        {
            name: 'Hot Chocolate',
            description: 'Real chocolate blended with steamed milk.',
            price: 25,
            image: 'https://static.vecteezy.com/system/resources/previews/028/174/738/original/cup-of-hot-chocolate-with-cream-isolated-on-transparent-background-generative-ai-png.png',
        },
        {
            name: 'Strawberry Milk',
            description: 'Real Strawberry blended with steamed milk.',
            price: 15,
            image: 'https://th.bing.com/th/id/R.50b8c69584ce0c55986f91b565dfe78e?rik=xtp54tNzSPHEZQ&pid=ImgRaw&r=0',
        },
        {
            name: 'Asian Lemon Tea',
            description: 'Ask your Barista about our selection of teas.',
            price: 10,
            image: 'https://static.vecteezy.com/system/resources/previews/038/370/243/non_2x/ai-generated-iced-lemon-tea-isolated-on-transparent-background-png.png',
        },
        {
            name: 'Black Asian Tea',
            description: 'A blend of black tea, spices, honey and milk.',
            price: 25,
            image: 'https://static.vecteezy.com/system/resources/previews/016/349/669/non_2x/cup-of-tea-with-fresh-tea-leaves-on-saucer-transparant-background-png.png',
        },
    ];
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
                                    <span className="price">${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Page;