import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Ethan({ results }) {
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
        <Link href="/owners">
          <a>Owners Page</a>
        </Link>
        <Link href="/owners/ethan">
          <a>Silverbacks</a>
        </Link>
      </div>
      <div>
        {results.map((player) => (
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
    const users = await res.json();
    const filteredUsers = Object.keys(users)
      .filter((key) => roster.includes(key))
      .reduce((obj, key) => {
        obj[key] = users[key];
        return obj;
      }, {});
    const results = Object.values(filteredUsers).sort((a, b) =>
      a.number > b.number ? 1 : -1
    );
    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
