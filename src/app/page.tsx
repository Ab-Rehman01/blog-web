import { client } from '@/sanity/lib/client';

interface Iblog {
  name: string;
}

export default async function Home() {
  let res: Iblog[] = await client.fetch('*[_type == "blog"]');
  return (
    <div>
      {res.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.name}</h1>
          </div>
        );
      })}
    </div>
  );
}
