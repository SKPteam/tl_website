import React from 'react'

const ListText = ({ title, body }) => {
  return (
    <div className='mb-10'>
      <h6 className='text-[#252525] text-[24px] font-medium leading-8 mb-5 flex items-center'><span className='block px-3 text-[20px]'>●</span> {title}</h6>
      <p className='text-[#555] text-[18px] font-medium leading-[27px]'>{body}</p>
    </div>
  )
}

export default ListText
