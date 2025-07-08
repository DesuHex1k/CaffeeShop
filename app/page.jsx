import React from 'react';
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import Story from "../components/Story";
import Menu from "../components/Menu";
import BookingForm from "../components/BookingForm";
import Shop from "../components/Shop";
import './pageHome.css'

const Page = () => {
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
    return (
        <div className="page">
            <div className="about content">
                <h1>Найкраща кава в місті</h1>
                <h2>Завітайте до нас та переконайтеся</h2>

                <div className="bottom">
                    <div>
                        <h2>
                            Години роботи
                        </h2>
                        <p>
                            ПН - СБ : 7:00 - 20:00
                        </p>
                    </div>
                    <div>
                        <Image src='/Coffee-Cup.png' alt="Кавова чашка" width={336} height={522} />
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

            <Story/>

            <Menu menuItems={menuItems} />

            <Shop products={products} />

            <BookingForm />

            <div className="shop content">
                <h1>Відгуки</h1>
                <Testimonials/>
            </div>
        </div>
    );
};

export default Page;