import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div>
        <nav className='flex bg-blue-600 justify-between' >
            <div className='flex gap-4 text-3xl text-white h-14 p-2'>
            <Link href={'/'}>
            Home
            </Link>
            <Link href={'/about'}>
            About
            </Link>
            <Link href={'/info'}>
            Info
            </Link>
            <Link href={'/camp'}>
            Camp
            </Link>
            </div>

            <div className='flex gap-4 text-3xl text-white h-14 p-2'>
            <Link href={'/login'}>
            Login
            </Link>
            <Link href={'/register'}>
            Register
            </Link>
            </div>
        </nav>
    </div>
  )
}

export default navbar