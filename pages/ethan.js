import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { roster } from '../lib/roster.js';

export default function Ethan({ results }) {
  const users = results;
  const selectedUsers = roster;
  const filteredUsers = Object.keys(users)
    .filter((key) => selectedUsers.includes(key))
    .reduce((obj, key) => {
      obj[key] = users[key];
      return obj;
    }, {});
  const filteredArray = Object.values(filteredUsers);
  const sortedArray = filteredArray.sort((a, b) =>
    a.number > b.number ? 1 : -1
  );

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
        {filteredArray.map((player) => (
          <div key={player.id}>
            <p>{`${player.number} ${player.position} ${player.full_name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://ethanrmorris.github.io/v1/players.json');
    const results = await res.json();
    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
