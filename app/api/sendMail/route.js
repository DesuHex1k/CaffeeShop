import nodemailer from "nodemailer";

export async function POST(req) {
    const GMAIL_PASS = process.env.GMAIL_PASS;
    const { name, email, phone, date, time, people, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "snagy.sasha@gmail.com",
        pass: GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "vt231_noo@student.ztu.edu.ua",
      subject: "Нове бронювання столу",
      text: `
        Ім'я: ${name}
        Email: ${email}
        Телефон: ${phone}
        Дата: ${date}
        Час: ${time}
        Кількість людей: ${people}
        Повідомлення: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
} 