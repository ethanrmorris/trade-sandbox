import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ results }) {
  return (
    <div className={styles.container}>
      <h1>Chug League Trades</h1>
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
      <div className={styles.grid}>
        {results.map((trade) => (
          <div key={trade.id} className={styles.card}>
            <p>
              #{trade.id} - {trade.date}
            </p>
            <div className={trade.owner_3 ? styles.tradeDiv3 : styles.tradeDiv}>
              <div>
                <h2>
                  {trade.owner_1
                    .charAt(0)
                    .toUpperCase()
                    .concat(trade.owner_1.slice(1))}
                  {' Acquires'}
                </h2>
                {trade.players_1.map((player) => (
                  <p className={styles.playerName}>
                    {player.name}
                    {player.player ? (
                      <div
                        className={styles.player}
                      >{`(${player.player}, ${player.position} - ${player.team})`}</div>
                    ) : (
                      <span>
                        {player.position
                          ? `  ${player.position} - ${player.team}`
                          : null}
                      </span>
                    )}
                  </p>
                ))}
              </div>
              <div>
                <h2>
                  {trade.owner_2
                    .charAt(0)
                    .toUpperCase()
                    .concat(trade.owner_2.slice(1))}
                  {' Acquires'}
                </h2>
                {trade.players_2.map((player) => (
                  <p className={styles.playerName}>
                    {player.name}
                    {player.player ? (
                      <div
                        className={styles.player}
                      >{`(${player.player}, ${player.position} - ${player.team})`}</div>
                    ) : (
                      <span>
                        {player.position
                          ? `  ${player.position} - ${player.team}`
                          : null}
                      </span>
                    )}
                  </p>
                ))}
              </div>
              {trade.owner_3 && (
                <div>
                  <h2>
                    {trade.owner_2
                      .charAt(0)
                      .toUpperCase()
                      .concat(trade.owner_3.slice(1))}
                    {' Acquires'}
                  </h2>
                  {trade.players_3.map((player) => (
                    <p className={styles.playerName}>
                      {player.name}
                      {player.player ? (
                        <div
                          className={styles.player}
                        >{`(${player.player}, ${player.position} - ${player.team})`}</div>
                      ) : (
                        <span>
                          {player.position
                            ? `  ${player.position} - ${player.team}`
                            : null}
                        </span>
                      )}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://ethanrmorris.github.io/v1/trades.json');
    const data = await res.json();
    const results = data.reverse();
    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
