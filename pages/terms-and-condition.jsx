import TitleText from '@/components/atoms/TitleText'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { BiSolidEnvelope } from 'react-icons/bi'
import Feedback from '@/components/molecules/Feedback'

const TermsAndCondition = () => {
  return (
    <WebsiteLayout>
      <div className="container-small mt-[140px]">
        <h2 className='text-[#252525] text-center text-[60px] max-lg:text-[40px] font-medium leading-[72px] mb-[150px]'>Terms and Conditions</h2>
      
        <TitleText
          title="Terms and Conditions"
          text="Welcome to the terms and conditions that govern your use of Tranquil Life's comprehensive mental health services. Your decision to utilize our services implies your acknowledgment and acceptance of the following terms. Should you not agree with any part of these terms, kindly refrain from using our services."
        />

        <TitleText
          title="Overview of Services"
          text="Tranquil Life is dedicated to providing a diverse array of mental health services, including but not limited to therapy, counseling, and support. Our services are thoughtfully curated to cater to individuals who are actively seeking professional assistance to enhance their emotional well-being and mental equilibrium."
        />

        <TitleText
          title="Eligibility Criteria"
          text="To benefit from our services, you must be at least 18 years old. For individuals under the age of 18, parental or legal guardian consent is mandatory for service utilization. By agreeing to these terms, you confirm that you meet these eligibility requirements."
        />

        <TitleText
          title="Payment and Fee Structure"
          text="In order to secure your appointment, we require payment at the time of booking. Detailed information regarding our fee structure can be provided upon request, and please note that these fees are subject to potential revisions without prior notice."
        />

        <TitleText
          title="Appointment Adjustments and Refund Policy"
          text="If, due to unforeseen circumstances, you need to reschedule or cancel an appointment, we kindly ask for a minimum notice of 24 hours before the scheduled time. Refunds are available, subject to a deduction of administrative fees. However, appointments missed without proper notice are non-refundable."
        />

        <TitleText
          title="Privacy and Confidentiality Commitment"
          text="Respecting your privacy is paramount to Tranquil Life. We diligently uphold the principle of confidentiality as mandated by both legal and ethical considerations. It's important to be aware, however, that certain exceptional circumstances may require us to breach confidentiality, especially if there's a perceived risk of harm to yourself or others."
        />

        <TitleText
          title="Variety of Communication Channels"
          text="Our services are made accessible through an array of communication methods, spanning in-person sessions, video calls, telephone conversations, and messaging platforms. It is your responsibility to ensure that your chosen communication channel provides a secure and private environment."
        />

        <TitleText
          title="Expectations Regarding Outcomes"
          text="While we wholeheartedly commit to offering professional and effective services, we must clarify that specific results cannot be guaranteed. Progress and outcomes are influenced by a myriad of individual factors that can vary significantly."
        />

        <TitleText
          title="Limitation of Our Liability"
          text="Tranquil Life, along with our team of dedicated mental health professionals, cannot be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the utilization of our services or the information we provide."
        />

        <TitleText
          title="Intellectual Property and Usage Rights"
          text="All content furnished as part of our services, encompassing textual material, graphics, logos, images, and more, are safeguarded by copyright and intellectual property laws. The creation of derivative works or any unauthorized distribution requires explicit permission from us."
        />

        <TitleText
          title="Adaptations to Terms and Services"
          text="Tranquil Life retains the right to modify these terms and conditions at its sole discretion. Any modifications will be effective immediately upon being posted on our website or conveyed through other suitable means. Continued use of our services post-modifications signifies your acceptance of the updated terms."
        />

        <TitleText
          title="Legal Jurisdiction and Dispute Resolution"
          text="These terms and conditions are governed by the laws of the jurisdiction in which Tranquil Life is registered. In the event of disputes arising from or related to these terms, both parties agree to adhere to arbitration proceedings in accordance with the rules set forth by the relevant arbitration authority"
        />

        <TitleText
          title="Connect with us"
          text="By engaging with Tranquil Life's mental health services, you are demonstrating your understanding, acceptance, and agreement to adhere to these terms and conditions. Should you have any inquiries or concerns, we encourage you to reach out to us."
          marginBottom='20px'
        />

        <div className='mb-[100px]'>
          <div className="flex items-center gap-2 text-[#555] text-[18px] font-medium leading-[27px] mb-[12px]">
            <FaPhoneAlt className='text-[24px] text-[#388D4E]' />
            +234 789 45670; +234 789 45670 
          </div>

          <div className="flex items-center gap-2 text-[#555] text-[18px] font-medium leading-[27px]">
            <BiSolidEnvelope className='text-[24px] text-[#388D4E]' />
            support@tranquillife.net
          </div>
        </div>

        <Feedback />

      </div>
    </WebsiteLayout>
  )
}

export default TermsAndCondition
