import Link from 'next/link';
import UsersTable from './UsersTable';

const UsersPage = async () => {
  return (
    <div>
      <h1>Users</h1>
      <Link href={'/users/new'} className='text-blue-500'>New</Link>

      <p>{new Date().toLocaleTimeString()}</p>

      <UsersTable />
    </div>
  )
}

export default UsersPage;