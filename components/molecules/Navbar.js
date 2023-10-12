import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='relative flex items-center py-10 px-[16px] lg:px-[60px]'>
      <Link href="/">
        <Image src='/assets/logo/logo.svg' width={40} height={38} alt='logo'></Image>
      </Link>

      <ul className='hidden lg:flex items-center gap-[60px] ml-auto'>
        <li><Link href='/about' className='text-[#555] text-[18px] font-medium'>About Us</Link></li>
        <li><Link href='/' className='text-[#555] text-[18px] font-medium'>Contact us</Link></li>
        <li><Link href='/' className='text-[#555] text-[18px] font-medium'>For therapists</Link></li>
        <li><Link href='/' className='text-[#555] text-[18px] font-medium'>Work with us</Link></li>
        <li><Link href='/' className='px-[60px] py-[16px] rounded-lg bg-[#388D4E] border-[1px] border-solid text-white text-[18px] font-medium border-[#388D4E]  h-14'>Get early access</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar