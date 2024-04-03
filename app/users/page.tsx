import Link from 'next/link';
import React from 'react'

interface User {
  id: number
  name: string
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <Link href={'/users/new'} className='text-blue-500'>New</Link>

      <p>{new Date().toLocaleTimeString()}</p>

      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default UsersPage;