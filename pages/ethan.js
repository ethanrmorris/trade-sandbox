import Link from 'next/link';
import styles from '../styles/Home.module.css';

import players from '../lib/players.js';

export default function Ethan() {
  const roster = [
    '4089',
    '6845',
    '4455',
    '8159',
    '5880',
    '5347',
    '7523',
    '6869',
    '8116',
    '8137',
    '8168',
    '4199',
    '8190',
    '8194',
    '6798',
    '6813',
    '5849',
    '3222',
    '8205',
    '8211',
    '4219',
    '5012',
    '4152',
    '8189',
    '8174',
    '3969',
    '7640',
    '6801',
    '2330',
    '4983',
    '5133',
    '6220',
    '3172',
    '6989',
    '5928',
    '1367',
    '6794',
    '8173',
    '2307',
    '8219',
    '4950',
    '7720',
    '8152',
  ];
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
          <h2>{players[player].full_name}</h2>
        ))}
      </div>
    </div>
  );
}
