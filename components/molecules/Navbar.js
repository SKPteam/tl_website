import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className='relative flex items-center py-10 px-[16px] xl:px-[60px]'>
      <Link href="/">
        <Image src='/assets/logo/logo.svg' width={40} height={38} alt='logo'></Image>
      </Link>
    
      <button type='button' onClick={() => setNavbar(prev => !prev)} className='h-9 w-9 flex flex-col items-end gap-3 ml-auto lg:hidden'>
        <span className="block h-[2px] w-full bg-gray-600"></span>
        <span className="block h-[2px] w-4/6 bg-gray-600"></span>
        <span className="block h-[2px] w-full bg-gray-600"></span>
      </button>
    
      <ul className={`flex flex-col lg:flex-row lg:items-center gap-[60px] max-lg:fixed transition-all ease-in-out duration-200 top-0 max-lg:z-20 max-lg:shadow-lg max-lg:px-4 max-lg:py-10 max-lg:h-screen max-lg:w-72 max-lg:bg-white lg:relative lg:ml-auto ${navbar ? 'max-lg:right-0' : 'max-lg:-right-80'}`}>
        <li><Link href='/about' className='text-[#555] text-[18px] font-medium'>About Us</Link></li>
        <li><Link href='/' className='text-[#555] text-[18px] font-medium'>Contact us</Link></li>
        <li><Link href='/' className='text-[#555] text-[18px] font-medium'>For therapists</Link></li>
        <li><Link href='/' className='text-[#555] text-[18px] font-medium'>Work with us</Link></li>
        <li><Link href='/' className='px-[60px] py-[16px] rounded-lg bg-[#388D4E] border-[1px] border-solid text-white text-[18px] font-medium border-[#388D4E]  h-14'>Get early access</Link></li>
      </ul>
      <div onClick={() => setNavbar(prev => !prev)} className={`h-screen w-screen z-10 cursor-pointer fixed top-0 left-0 bg-[#388D4E]/20 ${navbar ? 'block' : 'hidden'}`}></div>
    </nav>
  )
}

export default Navbar