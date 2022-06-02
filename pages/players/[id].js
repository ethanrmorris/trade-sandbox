import { useRouter } from 'next/router';

export default function Player() {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Player: {pid}</p>;
}
