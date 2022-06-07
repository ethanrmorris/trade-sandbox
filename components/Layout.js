import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Chug League</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/trades">
          <a>Trades</a>
        </Link>
        <Link href="/stats">
          <a>Stats</a>
        </Link>
        <Link href="/owners">
          <a>Owners</a>
        </Link>
        <Link href="/players">
          <a>Players</a>
        </Link>
        <Link href="/supabase">
          <a>Supabase</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
