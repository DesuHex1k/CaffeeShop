import React from 'react';
import Menu from '../../components/Menu';

const menuItems = [
    {
        name: 'Кава Макіато',
        description: 'Порція еспресо, приготована по-італійськи.',
        price: 65,
        image: 'https://static.vecteezy.com/system/resources/previews/029/345/013/original/macchiato-coffee-isolated-on-transparent-background-ai-generative-free-png.png',
    },
    {
        name: 'Кава Лате',
        description: 'Еспресо та спінене молоко з пінкою.',
        price: 70,
        image: 'https://www.pngarts.com/files/1/Cafe-Latte-PNG-Image.png',
    },
    {
        name: 'Еспресо Макіато',
        description: 'Еспресо з краплею спіненого молока.',
        price: 75,
        image: 'https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-espresso-macchiato-coffee-drink-with-foamed-milk-png-image_11520214.png',
    },
    {
        name: 'Американо',
        description: 'Еспресо з додаванням гарячої води.',
        price: 68,
        image: 'https://static.vecteezy.com/system/resources/previews/023/438/445/non_2x/espresso-coffee-cutout-free-png.png',
    },
    {
        name: 'Гарячий шоколад',
        description: 'Справжній шоколад зі спіненим молоком.',
        price: 75,
        image: 'https://static.vecteezy.com/system/resources/previews/028/174/738/original/cup-of-hot-chocolate-with-cream-isolated-on-transparent-background-generative-ai-png.png',
    },
    {
        name: 'Полуничне молоко',
        description: 'Справжня полуниця зі спіненим молоком.',
        price: 65,
        image: 'https://th.bing.com/th/id/R.50b8c69584ce0c55986f91b565dfe78e?rik=xtp54tNzSPHEZQ&pid=ImgRaw&r=0',
    },
    {
        name: 'Азійський лимонний чай',
        description: 'Запитайте у бариста про наш вибір чаїв.',
        price: 60,
        image: 'https://static.vecteezy.com/system/resources/previews/038/370/243/non_2x/ai-generated-iced-lemon-tea-isolated-on-transparent-background-png.png',
    },
    {
        name: 'Чорний азійський чай',
        description: 'Суміш чорного чаю, спецій, меду та молока.',
        price: 75,
        image: 'https://static.vecteezy.com/system/resources/previews/016/349/669/non_2x/cup-of-tea-with-fresh-tea-leaves-on-saucer-transparant-background-png.png',
    },
];

const MenuPage = () => (
    <div>
        <Menu menuItems={menuItems} />
    </div>
);

export default MenuPage; 