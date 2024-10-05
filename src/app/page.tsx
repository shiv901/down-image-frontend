import { auth } from '@/auth';
import SignIn from '@/components/SignIn';
import { SignOut } from '@/components/SignOut';

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <h1>Welcome {session?.user?.name}</h1>
      {session?.user ? <SignOut /> : <SignIn />}
    </main>
  );
}
