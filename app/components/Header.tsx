import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='px-32 py-4 flex justify-between items-center border-b sticky top-0 left-o bg-white z-50'>
            <span className='text-2xl font-bold'>LOGO</span>
            <ul className='flex space-x-4'>
                <li className='hover:underline underline-offset-4'><Link href={'/'}>Home</Link></li>
                <li className='hover:underline underline-offset-4'><Link href={'/about'}>About</Link></li>
                <li className='hover:underline underline-offset-4'><Link href={'/contact'}>Contact Us</Link></li>
            </ul>
        </header>
    )
}

export default Header