import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongoose';
import Order from '../../../models/Order';

export async function POST(request) {
    await dbConnect();

    try {
        const { name, phone, address, cart } = await request.json();

        if (!name || !phone || !address || !cart || cart.length === 0) {
            return NextResponse.json({ error: 'Заповніть всі поля і додайте товари' }, { status: 400 });
        }

        const order = await Order.create({
            name,
            phone,
            address,
            cart,
        });

        return NextResponse.json({ message: 'Замовлення створено', order }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Помилка сервера' }, { status: 500 });
    }
}
