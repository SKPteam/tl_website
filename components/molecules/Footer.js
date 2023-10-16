import React from 'react'
import footerStyle from '@/styles/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { PiInstagramLogoFill } from 'react-icons/pi'

const Footer = () => {
  return (
    <div className={`${footerStyle.footerBg} py-[60px]`}>
      <div className="container">
        <div className="flex flex-wrap items-start gap-[20px]">
          <Image src='/assets/logo/logo.svg' width={95} height={100} alt='logo'></Image>

          <div className="ml-auto grid lg:grid-cols-3 grid-cols-2 gap-5 lg:gap-[150px]">
            <div>
              <h6 className='text-[#1F1F1F] text-[20px] font-semibold leading-[28px] mb-[20px]'>Company</h6>
              <ul className='flex flex-col gap-5'>
                <li><Link href='/' className='text-[#555] text-[18px] font-medium leading-[26px]'>About us</Link></li>
                <li><Link href='/' className='text-[#555] text-[18px] font-medium leading-[26px]'>Contact us</Link></li>
                <li><Link href='/' className='text-[#555] text-[18px] font-medium leading-[26px]'>Review</Link></li>
                <li><Link href='/faq' className='text-[#555] text-[18px] font-medium leading-[26px]'>FAQs</Link></li>
                <li><Link href='/' className='text-[#555] text-[18px] font-medium leading-[26px]'>Blog</Link></li>
              </ul>
            </div>

            <div>
              <h6 className='text-[#1F1F1F] text-[20px] font-semibold leading-[28px] mb-[20px]'>Aid</h6>
              <ul className='flex flex-col gap-5'>
              <li><Link href='/' className='text-[#555] text-[18px] font-medium leading-[26px]'>Donate</Link></li>
              <li><Link href='/' className='text-[#555] text-[18px] font-medium leading-[26px]'>Be a volunteer</Link></li>
              <li><Link href='/' className='text-[#555] text-[18px] font-medium leading-[26px]'>Be a sponsor</Link></li>
              </ul>
            </div>

            <div>
              <h6 className='text-[#1F1F1F] text-[20px] font-semibold leading-[28px] mb-[20px]'>Legal</h6>
              <ul className='flex flex-col gap-5'>
              <li><Link href='/terms-and-condition' className='text-[#555] text-[18px] font-medium leading-[26px]'>Terms & Agreements</Link></li>
              <li><Link href='/privacy-policy' className='text-[#555] text-[18px] font-medium leading-[26px]'>Privacy policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className='border-t-[1px] border-solid border-[#ABABAB] my-[40px]' />

        <div className="flex gap-5 flex-wrap justify-between items-center">
          <ul className="flex flex-wrap gap-[40px]">
            <li>
              <a href="#" className='flex w-8 h-8 p-[9px] justify-center items-center rounded-full border-[1px] border-solid border-[#D3D3D3] bg-[#FFF]'>
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" className='flex w-8 h-8 p-[9px] justify-center items-center rounded-full border-[1px] border-solid border-[#D3D3D3] bg-[#FFF]'>
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="#" className='flex w-8 h-8 p-[9px] justify-center items-center rounded-full border-[1px] border-solid border-[#D3D3D3] bg-[#FFF]'>
                <PiInstagramLogoFill />
              </a>
            </li>
            <li>
              <a href="#" className='flex w-8 h-8 p-[9px] justify-center items-center rounded-full border-[1px] border-solid border-[#D3D3D3] bg-[#FFF]'>
                <FaLinkedinIn />
              </a>
            </li>
          </ul>

          <p className="text-[#555] text-[18px] font-medium leading-[26px]">Tranquil Life © 2023</p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className='flex w-[200px] py-[14px] px-[29px] justify-center items-center gap-3 rounded-lg border-[1px] border-solid border-[#A6A6A6] bg-[#100F0D]'>
              <Image src="/assets/logo/playstore.svg" width={22} height={24} alt="" />
              <Image src="/assets/logo/playstore-text.svg" width={84} height={27} alt="" />
            </a>
            <a href="#" className='flex w-[200px] py-[14px] px-[29px] justify-center items-center gap-3 rounded-lg border-[1px] border-solid border-[#A6A6A6] bg-[#100F0D]'>
              <Image src="/assets/logo/apple.svg" width={22} height={24} alt="" />
              <Image src="/assets/logo/apple-text.svg" width={84} height={27} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer