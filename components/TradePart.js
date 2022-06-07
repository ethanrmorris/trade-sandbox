import Link from 'next/link';

export default function TradePark({ owner, piece }) {
  return (
    <div>
      <h2 className="text-xl py-4">
        {owner.charAt(0).toUpperCase().concat(owner.slice(1))}
        {' Acquires'}
      </h2>
      {JSON.parse(piece).map((player) => (
        <Link href={`/players/${player.id}`}>
          <div>
            <a className="hover:underline hover:cursor-pointer">
              {player.name}
              {player.player ? (
                <div className="text-sm pl-4">{`(${player.player}, ${player.position} - ${player.team})`}</div>
              ) : (
                <span>
                  {player.position
                    ? `  ${player.position} - ${player.team}`
                    : null}
                </span>
              )}
            </a>
          </div>
        </Link>
      ))}
    </div>
  );
}
