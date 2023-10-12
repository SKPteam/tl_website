import TeamContainer from '@/components/atoms/TeamContainer'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <WebsiteLayout>
      <div className="container mt-[120px]">
        <h2 className='text-[#252525] text-center text-[60px] max-lg:text-[40px] font-medium leading-[72px] mb-[150px]'>About Tranquil Life</h2>
        <p className='text-[#555] text-center text-[18px] max-w-[1006px] mx-auto font-medium leading-[26px] mb-[204px]'>
          We are the best online therapy platform in Nigeria. We offer personalized mental health support through diverse therapy avenues, including virtual sessions and chat therapy. Our skilled therapists employ evidence-based methods and provide valuable resources like mood tracking and daily affirmations. Our nurturing environment empowers individuals to address mental health needs and enhance overall well-being
        </p>

        <div className='mb-[203px]'>
          <h4 className='text-[#252525] text-[40px] max-lg:text-[25px] font-semibold leading-[56px] mb-[20px]'>Our mission</h4>
          <p className='text-[#555] text-[18px] mx-auto font-medium leading-[26px]'>
            Tranquil Life is dedicated to offering compassionate and accessible online mental health therapy. Our mission is to empower individuals with evidence-based support to navigate challenges, enhance well-being, and lead fulfilling lives. Through virtual sessions, personalized approaches, and valuable resources, we create a secure and nurturing environment where individuals can find healing, growth, and their journey to tranquility
          </p>
        </div>

        <div className='mb-[210px]'>
          <h4 className='text-[#252525] text-[40px] max-lg:text-[25px] font-semibold leading-[56px] mb-[20px]'>Our story</h4>
          <p className='text-[#555] text-[18px] mx-auto font-medium leading-[26px]'>
            Our inception is rooted in the personal journey of an individual who intimately grasped the complexities of mental health struggles. Their unwavering commitment to extending a compassionate hand to others catalyzed the creation of an accessible platform to bridge the gap in support. <br />
            Collaborating with kindred mental health advocates, they collectively co-authored the narrative of Tranquil Life—a sanctuary where virtual therapy, personalized approaches, and invaluable resources converge to serve those in need. <br />
            This evolution from personal challenges to collective hope stands as a testament to an unflagging dedication to providing solace and tranquility to all earnestly seeking support. At each pivotal turn, Tranquil Life adeptly converts obstacles into opportunities for healing and growth, underscoring the profound influence of empathy and understanding. <br />
            With every step forward, Tranquil Life showcases how deeply personal experiences can morph into a guiding light for communal empowerment. The journey endures, as each individual we touch embodies the very essence of sharing in the path toward serenity and overall well-being.
          </p>
        </div>

        <div className='mb-[100px]'>
          <h4 className='text-[#252525] text-[40px] max-lg:text-[25px] font-semibold leading-[56px] mb-[20px]'>Our team</h4>
          <p className='text-[#555] text-[18px] mx-auto font-medium leading-[26px]'>
            The Tranquil Life team comprises diverse mental health professionals, all passionately dedicated to our mission. With backgrounds in psychology, counseling, and therapy, we bring valuable expertise and empathy. <br />
            Aligned with this collective vision, our therapists adeptly customize evidence-based approaches to cater to individual needs. Meanwhile, our team of technology and design experts ensures the platform's user-friendliness, and our content creators curate an abundance of resources for well-being. <br />
            At our core, we champion human connection and understanding. As a united team, we're committed to breaking barriers and fostering healing, offering unwavering support for individuals on their mental health journey.
          </p>
        </div>

        <h5 className='text-[#252525] text-[32px] text-center max-lg:text-[22px] font-semibold leading-[40px] mb-[40px]'>Our vibrant team</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[57px] mb-[206px]">
          <TeamContainer name='Ayomide Ajayi' position='CEO' imgUrl='/assets/team/user1.svg' />
          <TeamContainer name='Chinwendu Nnamene' position='Lead, Product Design' imgUrl='/assets/team/user2.svg' />
          <TeamContainer name='Olayinka Abiodun' position='CTO' imgUrl='/assets/team/user3.svg' />
          <TeamContainer name='Olamide Aayi' position='Head of Marketing' imgUrl='/assets/team/user4.svg' />
          <TeamContainer name='David Marshall' position='Lead, Systems Engineer' imgUrl='/assets/team/user5.svg' />
        </div>

        <p className='text-[#000] text-[18px] font-medium leading-[27px] mb-[200px]'>
          To learn more about Tranquil lie, write to us at &nbsp;
          <a className='text-[#0680BB] hover:no-underline' href="mailto:contact@tranquil-life.app">contact@tranquil-life.app</a>
        </p>
      </div>
    </WebsiteLayout>
  )
}

export default About