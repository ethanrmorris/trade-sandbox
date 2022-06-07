export default function PlayerCard({ id }) {
  return (
    <>
      <div className="card w-64 shadow-xl p-4 m-4 flex flex-col gap-8 items-center">
        <h3 className="card-title">{id.full_name}</h3>
        <img
          src={`https://sleepercdn.com/content/nfl/players/${id.player_id}.jpg`}
        ></img>
        <h5>
          {id.team}
          {' - '}
          {id.number}
        </h5>
      </div>
    </>
  );
}
