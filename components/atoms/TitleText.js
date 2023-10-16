import React from 'react'

const TitleText = ({ title, text, marginBottom = '100px' }) => {
  return (
    <div className={`mb-[${marginBottom || '100px'}]`}>
      <h6 className='text-[#252525] text-[32px] font-medium leading-10 mb-5'>{title}</h6>
      <p className='text-[#555] text-[18px] font-medium leading-[27px]'>{text}</p>
    </div>
  )
}

export default TitleText
