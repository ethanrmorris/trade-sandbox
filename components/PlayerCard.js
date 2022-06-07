import Link from 'next/link';

export default function PlayerCard({ id }) {
  return (
    <>
      <Link href={`/players/${id.player_id}`}>
        <a>
          <div className="card w-64 shadow-lg hover:shadow-2xl p-4 flex flex-col gap-4 items-center bg-base-300">
            <h3 className="card-title">{id.full_name}</h3>
            <img
              className="min-h-100"
              src={`https://sleepercdn.com/content/nfl/players/${id.player_id}.jpg`}
            ></img>
            <h5>
              {id.team}
              {' - '}
              {id.number}
            </h5>
          </div>
        </a>
      </Link>
    </>
  );
}
