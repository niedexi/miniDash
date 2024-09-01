// components/Layout.js
import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/orders">订单</Link>
                    </li>
                    <li>
                        <Link href="/users">用户</Link>
                    </li>
                </ul>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
