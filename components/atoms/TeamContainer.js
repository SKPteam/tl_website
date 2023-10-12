import Image from 'next/image'
import React from 'react'

const TeamContainer = ({ name, position, imgUrl }) => {
  return (
    <div className='relative h-full after:absolute after:flex after:-top-4 after:-right-4 after:h-[206px] after:w-[269px] after:bg-[#22552F] after:z-[-1]'>
      <div className='relative max-h-[250px] overflow-hidden mb-[16px] w-full bg-[#D9EEDF]'>
        <Image src={imgUrl} width={350} height={250} className='object-cover' alt='user' />
      </div>
      <div className="text-center">
        <h6 className='text-[#252525] text-[24px] font-medium leading-[36px] mb-[6px]'>{name}</h6>
        <p className='text-[#555] text-[18px] font-medium leading-[26px]'>{position}</p>
      </div>
    </div>
  )
}

export default TeamContainer