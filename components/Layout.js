import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h1>Chug League</h1>
      <div className={styles.gap}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/trades">
          <a>Trades</a>
        </Link>
        <Link href="/stats">
          <a>Stats</a>
        </Link>
        <Link href="/owners">
          <a>Owners</a>
        </Link>
        <Link href="/players">
          <a>Players</a>
        </Link>
        <Link href="/supabase">
          <a>Supabase</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
