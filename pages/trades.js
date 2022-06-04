import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { supabase } from '../utils/supabaseClient';

export default function Home({ results }) {
  return (
    <div className={styles.grid}>
      <h1>{results.length}</h1>
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
              {JSON.parse(trade.players_1).map((player) => (
                <Link href={`/players/${player.id}`}>
                  <a className={styles.playerName}>
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
                  </a>
                </Link>
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
              {JSON.parse(trade.players_2).map((player) => (
                <Link href={`/players/${player.id}`}>
                  <a className={styles.playerName}>
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
                  </a>
                </Link>
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
                {JSON.parse(trade.players_3).map((player) => (
                  <Link href={`/players/${player.id}`}>
                    <a className={styles.playerName}>
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
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const { data: results } = await supabase
      .from('trades')
      .select('*')
      .or('owner_1.eq.ethan,owner_2.eq.ethan,owner_3.eq.ethan')
      .order('id', { ascending: false });

    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
