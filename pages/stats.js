import Link from 'next/link';

export default function Stats({ results }) {
  return (
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
