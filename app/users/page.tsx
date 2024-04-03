import Link from 'next/link';
import UsersTable from './UsersTable';
import { Suspense } from 'react';
import Spinner from '../loading';

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>

      <Link href={'/users/new'} className='btn'>New User</Link>

      <Suspense fallback={<Spinner />}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  )
}

export default UsersPage;