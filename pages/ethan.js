import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { players } from '../lib/players.js';
import { roster } from '../lib/roster.js';

export default function Ethan() {


  return (
    <div className={styles.container}>
      <h1>Ethan</h1>
      <div className={styles.gap}>
        <Link href="/">
          <a>Trades</a>
        </Link>
        <Link href="/stats">
          <a>Stats</a>
        </Link>
        <Link href="/ethan">
          <a>Silverbacks</a>
        </Link>
      </div>
      <div>
        {roster.map((player) => (
          <div key={players[player].player_id}>
            <p>
              {players[player].number} - {players[player].full_name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
