import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const Collapse = ({ question }) => {
  const [collapse, setCollapse] = useState(false)

  const toggleCollapse = () => {
    setCollapse(prev => !prev)
  }

  return (
    <div className={`relative group/collapse px-[12px] pt-[16px] pb-[20px] border-[1px] border-solid border-[#D3D3D3] rounded-lg ${collapse ? 'active' : ''}`}>
      <button type='button' onClick={toggleCollapse} className='flex w-full justify-between items-center gap-3 text-[#252525] text-[24px] font-medium leading-[36px]'>
        {question}

        <FaChevronDown className='shrink-0 text-[#808080] text-[24px]' />
      </button>
      <div className="h-0 group-[.active]/collapse:h-fit overflow-hidden duration-200 transition-all ease-in-out group-[.active]/collapse:pt-5 text-lg text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est veniam, illum expedita ex mollitia pariatur iusto et velit. Dolores debitis cupiditate perspiciatis, reiciendis cumque quae ducimus. Totam, deleniti similique!
      </div>
    </div>
  )
}

export default Collapse
