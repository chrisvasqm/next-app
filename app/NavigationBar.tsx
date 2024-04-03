import Link from 'next/link';
import React from 'react'

const NavigationBar = () => {
    return (
        <div className='flex bg-slate-200 p-5 space-x-3'>
            <Link href='/' className='mr-5'>Next.js</Link>
            <Link href='/users'>Users</Link>
            <Link href='/products'>Products</Link>
            <Link href='/admin'>Admin</Link>
            <Link href='/upload'>Upload</Link>
            <Link href='/api/auth/signin'>Login</Link>
        </div>
    )
}

export default NavigationBar;