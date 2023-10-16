import React, { useState } from 'react'
import { GoThumbsup, GoThumbsdown } from 'react-icons/go'

const Feedback = () => {
  const [feedback, setFeedback] = useState('');


  return (
    <div className='mb-[203px]'>
      <h6 className='text-[#252525] text-[32px] font-medium leading-10 mb-10'>Was this helpful?</h6>
      
      <div className="flex items-center gap-5 flex-wrap mb-[60px]">
        <button type='button' onClick={() => setFeedback('yes')} className={`flex items-center gap-3 h-14 text-[18px] font-medium px-[60px] py-4 border-[1px] border-solid border-[#388D4E] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] ${feedback === 'yes' ? 'text-[#fff] bg-[#388D4E]' : 'text-[#388D4E] bg-[#fff]'}`}>
          YES <GoThumbsup className='text-[24px]'/>
        </button>

        <button type='button' onClick={() => setFeedback('no')} className={`flex items-center gap-3 h-14 text-[18px] font-medium px-[60px] py-4 border-[1px] border-solid border-[#388D4E] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] ${feedback === 'no' ? 'text-[#fff] bg-[#388D4E]' : 'text-[#388D4E] bg-[#fff]'}`}>
          NO <GoThumbsdown className='text-[24px]'/>
        </button>
      </div>

      {feedback === 'no' && <>
        <div className='mb-10'>
          <label htmlFor="" className='block text-[#555] text-[18px] font-medium mb-3'>What can we do to improve?</label>
          <textarea rows="4" className='block w-full p-3 text-[#555] text-[18px] font-medium mb-3 rounded-lg border-[1px] border-solid border-[#D4D4D4]'></textarea>
          <p className="text-[#6E6E6E] text-[14px] font-normal">Do not include contact information in this message to protect your privacy</p>
        </div>
        
        <button type='button' className='flex items-center gap-3 h-14 text-[18px] font-medium px-[60px] py-4 border-[1px] border-solid border-[#388D4E] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] text-[#fff] bg-[#388D4E]'>
          Submit
        </button>
      </>}
    </div>
  )
}

export default Feedback
