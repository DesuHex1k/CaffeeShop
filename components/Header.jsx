'use client'
import Image from 'next/image';
import styles from './Header.module.css';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const navLinks = [
        { href: '/', label: 'Головна' },
        { href: '/about', label: 'Про нас' },
        { href: '/menu', label: 'Меню' },
        { href: '/booking', label: 'Бронювання' },
    ];
    return (
        <header className={styles.mainHeader}>
            <nav className={styles.navBar}>
                <ul className={styles.navLeft}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={pathname === link.href ? styles.active : ''}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Logo" width={80} height={80} />
                </div>

                <ul className={styles.navRight}>
                    <li><Link href="/reviews">Відгуки</Link></li>
                    <li><Link href="/shop">Магазин</Link></li>
                    <li><Link href="/contact">Контакти</Link></li>
                    <li>
                        <Link href="/search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="searchIcon" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </Link>
                    </li>
                    <li className={styles.cart}>
                        <Link href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className={styles.bi} viewBox="0 0 16 16">
                                <path
                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                            <span className={styles.cartCount}>2</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
