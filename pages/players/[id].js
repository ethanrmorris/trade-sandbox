import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import { supabase } from '../../utils/supabaseClient';

export default function Player({ results }) {
  return (
    <div className={styles.card}>
      <h3>Players</h3>
      <h5>
        {results[0].full_name} - {results[0].number}
      </h5>
      <img
        className={styles.image}
        src={`https://sleepercdn.com/content/nfl/players/${results[0].player_id}.jpg`}
      ></img>
      <img
        className={styles.image}
        src={`https://sleepercdn.com/images/team_logos/nfl/${results[0].team.toLowerCase()}.png`}
      ></img>
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://ethanrmorris.github.io/v1/players.json');
  const players = await res.json();
  const newResults = Object.values(players);

  // Get the paths we want to pre-render based on posts
  const paths = newResults.map((player) => ({
    params: { id: player.player_id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch('https://ethanrmorris.github.io/v1/players.json');
    const players = await res.json();
    const newResults = Object.values(players);

    const results = newResults.filter((obj) => {
      return obj.player_id === params.id;
    });

    return {
      props: { results },
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
}
