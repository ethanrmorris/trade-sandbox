import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Stats() {
  return (
    <div className={styles.container}>
      <h1>Stats</h1>
      <div className={styles.gap}>
        <Link href="/">
          <a>Trades</a>
        </Link>
        <Link href="/stats">
          <a>Stats</a>
        </Link>
        <Link href="/owners">
          <a>Owners Page</a>
        </Link>
        <Link href="/owners/ethan">
          <a>Silverbacks</a>
        </Link>
      </div>
    </div>
  );
}
