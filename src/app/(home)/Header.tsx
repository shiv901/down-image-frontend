import { auth } from '@/auth';
import SignIn from '@/components/SignIn';
import { SignOut } from '@/components/SignOut';
import ThemeToggle from '@/components/ThemeToggle';
import { apps } from '@/constants';
import { capitalize } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const session = await auth();

  return (
    <div className='bg-slate-100 dark:bg-slate-900'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        {/* Logo */}
        <div className='logo font-bold'>
          <Link href='/'>DownImage</Link>
        </div>

        {/* NavLinks */}
        <div className='flex items-center gap-6'>
          {apps.map((app) => (
            <Link
              href={`/${app}`}
              key={app}
              className='hover:text-blue-500 hover:underline'
            >
              {capitalize(app)}
            </Link>
          ))}
        </div>

        {/* User Profile */}
        <div className='flex items-center gap-4'>
          {session?.user?.image && (
            <Image
              className='rounded-full'
              width={40}
              height={40}
              src={session?.user?.image || ''}
              alt='profile image'
            />
          )}
          {/* <p>
            <span className='mt-2 block' style={{ lineHeight: 0.5 }}>
              {session?.user?.name}
            </span>
            <span className='text-[12px] text-slate-500'>
              {session?.user?.email}
            </span>
          </p> */}
          {session?.user ? <SignOut /> : <SignIn />}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
