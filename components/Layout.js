import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <label
          for="my-drawer-2"
          class="p-6 bg-base-300 max-w-fit hover:cursor-pointer lg:hidden"
        >
          X
        </label>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/trades">
              <a>Trades</a>
            </Link>
          </li>
          <li>
            <Link href="/stats">
              <a>Stats</a>
            </Link>
          </li>
          <li>
            <Link href="/owners">
              <a>Owners</a>
            </Link>
          </li>
          <li>
            <Link href="/players">
              <a>Players</a>
            </Link>
          </li>
          <li>
            <Link href="/supabase">
              <a>Supabase</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
