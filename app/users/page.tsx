import Link from 'next/link';
import React from 'react'

const UsersPage = () => {
  return (
    <div>
      <div>UsersPage</div>
      <Link href={'/users/new'} className='text-blue-500'>New</Link>
    </div>
  )
}

export default UsersPage;