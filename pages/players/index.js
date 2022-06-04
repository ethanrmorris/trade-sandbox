import styles from '../../styles/Home.module.css';
import Link from 'next/link';

export default function Players({ results }) {
  return (
    <div>
      <h3>Players</h3>
      {results.map((owner) => (
        <div key={owner.player_id} className={styles.anchorSpace}>
          <Link href={`/players/${owner.player_id}`}>
            <a>{owner.full_name}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://ethanrmorris.github.io/v1/players.json');
    const data = await res.json();
    const results = Object.values(data);

    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
  }
}
