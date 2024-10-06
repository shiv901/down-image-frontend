import { apps } from '@/constants';
import ItemCard from './ItemCard';

export default async function Home() {
  return (
    <main className='p-14 text-center'>
      <h1 className='text-center text-4xl'>Welcome to Down Image</h1>
      <p className='mt-2 text-xl text-slate-400'>
        Compress, Resize, and Share Image Online for Free!
      </p>
      <div className='grid grid-cols-3 place-content-center gap-4'>
        {apps.map((app) => (
          <ItemCard key={app} item={app} />
        ))}
      </div>

      <br />
    </main>
  );
}
