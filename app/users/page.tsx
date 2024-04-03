import Link from 'next/link';
import UsersTable from './UsersTable';

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href={'/users/new'} className='text-blue-500'>New</Link>

      <p>{new Date().toLocaleTimeString()}</p>

      <UsersTable sortOrder={sortOrder} />
    </div>
  )
}

export default UsersPage;