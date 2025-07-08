'use client'
import Image from 'next/image';
import styles from './Header.module.css';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {useState} from "react";

export default function Header() {
    const pathname = usePathname();
    // const [menuOpen, setMenuOpen] = useState(true);

    const navLinksLeft = [
        { href: '/', label: 'Головна' },
        { href: '/about', label: 'Про нас' },
        { href: '/menu', label: 'Меню' },
        
    ];
    const navLinksRight = [
        { href: '/booking', label: 'Бронювання' },
        { href: '/shop', label: 'Магазин' },
        {href: '/cart', label: 'Кошик'},
    ];
    return (
        <header className={styles.mainHeader}>
            <div className={styles.logoOnly}>
                <Image  src="/logo.png" alt="Logo" width={80} height={80} />
            </div>
                <nav className={`${styles.navBar}`}>
                <ul className={styles.navLeft}>
                    {navLinksLeft.map(link => (
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
                    {navLinksRight.map(link => (
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
            </nav>
        </header>
    );
}
