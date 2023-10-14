import Collapse from '@/components/molecules/Collapse'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import React from 'react'

const Faq = () => {
  return (
    <WebsiteLayout>
      <div className="container mt-[120px]">
        <h2 className='text-[#252525] text-center text-[60px] max-lg:text-[40px] font-medium leading-[72px] mb-[150px]'>Have questions?</h2>
        <p className='text-[#555] text-center text-[18px] mx-auto font-medium leading-[26px]'>
          Read the most frequently asked questions about mental health and Tranquil Life
        </p>

        <div className="flex flex-col gap-10 my-[200px]">
          <Collapse question="What is Tranquil Life?" />
          <Collapse question="Why is mental health important and how does Tranquil Life impact our well-being?" />
          <Collapse question="What distinguishes Tranquil Life from other mental health services? " />
          <Collapse question="What are the benefits of therapy in addressing mental health challenges with Tranquil Life?" />
          <Collapse question="How much do sessions costs?" />
          <Collapse question="How can I support Tranquil Life's mental health initiatives or get involved as a volunteer?" />
          <Collapse question="How can I determine the best therapy option for my situation?" />
          <Collapse question="How does Tranquil Life ensure a secure environment for virtual therapy sessions?" />
          <Collapse question="Are virtual therapy sessions as effective as in-person sessions at Tranquil Life?" />
          <Collapse question="How is confidentiality maintained in virtual therapy sessions at Tranquil Life?" />
          <Collapse question="Are there myths about mental health that Tranquil Life addresses?" />
          <Collapse question="How can I schedule an appointment for chat or video therapy?" />
        </div>

        <p className='text-[#000] text-[18px] font-medium leading-[27px] mb-[200px]'>
          To learn more Faq Tranquil life, write to us at &nbsp;
          <a className='text-[#0680BB] hover:no-underline' href="mailto:support@tranquil-life.app">support@tranquil-life.app</a>
        </p>
      </div>
    </WebsiteLayout>
  )
}

export default Faq