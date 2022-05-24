import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ results }) {
  console.log(results);
  return (
    <div className={styles.container}>
      <h1>Chug Trades</h1>
      <div className={styles.grid}>
        {results.map((trade) => (
          <Link href={`/trades/${trade.id}`} as={`/trades/${trade.id}`}>
            <a>
              <div key={trade.id} className={styles.card}>
                <p>{trade.date}</p>
                <h2>
                  {trade.owner_1
                    .charAt(0)
                    .toUpperCase()
                    .concat(trade.owner_1.slice(1))}
                </h2>
                <h2>
                  {trade.owner_2
                    .charAt(0)
                    .toUpperCase()
                    .concat(trade.owner_2.slice(1))}
                </h2>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await fetch('https://ethanrmorris.github.io/v1/trades.json');
    const results = await res.json();

    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
