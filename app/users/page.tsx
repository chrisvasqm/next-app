import Link from 'next/link';
import UsersTable from './UsersTable';

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>

      <Link href={'/users/new'} className='btn'>New User</Link>

      <UsersTable sortOrder={sortOrder} />
    </div>
  )
}

export default UsersPage;