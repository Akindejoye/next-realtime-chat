import { db } from '@/lib/db';

export default async function Home() {
  await db.set('hello', 'hello');

  return (
    <div>
      <h1 className='text-red-500'>Hello World!</h1>
    </div>
  )
}
