import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
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
          <a>Owners Page</a>
        </Link>
        <Link href="/supabase">
          <a>Supabase</a>
        </Link>
      </div>
      <div>
        <h2>Home Page</h2>
      </div>
    </div>
  );
}
