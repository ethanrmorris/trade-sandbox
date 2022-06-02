import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Owners({ results }) {
  return (
    <div>
      <h1>Owners Page</h1>
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
        {results.map((owner) => (
          <div key={owner.id}>
            <Link href={`/owners/${owner.id}`}>
              <a>{owner.team}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://ethanrmorris.github.io/v1/owners.json');
    const results = await res.json();
    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
