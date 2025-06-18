import './globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata = {
    title: 'My Next.js App',
    description: 'Це приклад layout',
}

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>
        </head>
        <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    )
}