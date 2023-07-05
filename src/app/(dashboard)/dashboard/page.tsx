import { FC } from 'react';
import Button from '@/components/ui/Button';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';

interface pageProps {
  
}
 
const page = async () => {
  const session = await getServerSession(authOptions)

  return ( 
    <div>
      <Button>hello</Button>
      <pre>{JSON.stringify(session)}</pre>
    </div>
   );
}
 
export default page;