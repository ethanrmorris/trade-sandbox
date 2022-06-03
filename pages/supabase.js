import { supabase } from '../utils/supabaseClient';

export default function Supabase({ data }) {
  return (
    <>
      <h2>Supabase</h2>
      {data.map((alldata) => (
        <div key={alldata.id}>{alldata.name}</div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await supabase
    .from('career_data')
    .select('*')
    .eq('position', 'QB');
  return {
    props: {
      data: data,
    },
  };
}
