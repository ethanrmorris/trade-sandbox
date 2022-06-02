import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Stats({ results }) {
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
      </div>
      <div>
        {results.map((game) => (
          <div key={game.id}>
            <Link href={`/player/${game.player_id}`}>
              <a>
                {game.player_name} {' - '} {game.fantasy_points}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://ethanrmorris.github.io/v1/stats/players/games.json'
    );
    const results = await res.json();

    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
