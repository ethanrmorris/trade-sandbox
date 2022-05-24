import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ sortedResults }) {
  return (
    <div className={styles.container}>
      <h1>Chug Trades</h1>
      <div className={styles.grid}>
        {sortedResults.map((trade) => (
          <Link href={`/trades/${trade.id}`} as={`/trades/${trade.id}`}>
            <a>
              <div key={trade.id} className={styles.card}>
                <p>{trade.date}</p>
                <div className={styles.tradeDiv}>
                  <div>
                    <h2>
                      {trade.owner_1
                        .charAt(0)
                        .toUpperCase()
                        .concat(trade.owner_1.slice(1))}
                      {' Acquires'}
                    </h2>
                    {trade.players_1.map((player) => (
                      <p>
                        {player.name}
                        {player.player ? (
                          <div>{`${player.player}, ${player.position} - ${player.team}`}</div>
                        ) : (
                          <span>{`  ${player.position} - ${player.team}`}</span>
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
                      <p>
                        {player.name}
                        {player.team && (
                          <span>
                            {' ' + player.position + ' -'} {player.team}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>
                  {trade.owner_3 && (
                    <div>
                      <h2>
                        {trade.owner_3
                          .charAt(0)
                          .toUpperCase()
                          .concat(trade.owner_3.slice(1))}
                        {' Acquires'}
                      </h2>
                      {trade.players_3.map((player) => (
                        <p>
                          {player.name}
                          {player.team && (
                            <span>
                              {' ' + player.position + ' -'} {player.team}
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://ethanrmorris.github.io/v1/trades.json');
    const results = await res.json();
    const sortedResults = results.reverse();
    return {
      props: { sortedResults },
    };
  } catch (err) {
    console.error(err);
  }
}
