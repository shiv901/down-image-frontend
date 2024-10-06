import { capitalize } from '@/utils';
import { ArrowRightSquare } from 'lucide-react';
import Link from 'next/link';

export default function ItemCard({ item }: { item: string }) {
  return (
    <>
      <Link
        className='group mt-4 flex justify-center gap-5 rounded bg-[rgba(0,0,0,0.06)] p-8 py-12 backdrop-blur-md transition-all duration-300 hover:underline hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:bg-[rgba(255,255,255,0.06)]'
        href={`/${item}`}
      >
        {capitalize(item)}
        <ArrowRightSquare className='translate-x-0 transition-all duration-300 group-hover:translate-x-2' />
      </Link>
    </>
  );
}
