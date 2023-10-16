import React from 'react'
import WebsiteLayout from '@/layouts/WebsiteLayout'
import ListText from '@/components/atoms/ListText'
import Feedback from '@/components/molecules/Feedback'

const PrivacyPolicy = () => {
  return (
    <WebsiteLayout>
      <div className="container-small mt-[140px]">
        <h2 className='text-[#252525] text-center text-[60px] max-lg:text-[40px] font-medium leading-[72px] mb-[150px]'>Privacy Policy</h2>
      
        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[20px]'>Privacy Policy</h5>
          <p className='text-[#555] text-[18px] font-medium leading-[27px]'>
            We extend our warm welcome to the privacy policy that delineates how Tranquil Life manages your personal information as you engage with our comprehensive mental health services. This policy underscores our commitment to safeguarding your data, elucidating our practices concerning its collection, utilization, and protection. By partaking in our services, you inherently endorse and acquiesce to the tenets set forth in this policy
          </p>
        </div>

        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[40px]'>Information We Collect</h5>
          
          <ListText 
            title='Personal Information'  
            body='When you register for our services, we diligently gather personal information, encompassing your name, contact details, and certain demographic particulars. This holistic compilation equips us to effectively engage with you and tailor our services to harmonize with your distinct needs and circumstances'
          />

          <ListText 
            title='Health Information'  
            body='In harmony with the scope of our mental health services, we may also collect health-related data pertinent to furnish you with the most apt and personalized care. It is important to underscore that this category of information is treated with the highest degree of confidentiality and sensitivity'
          />

          <ListText 
            title='Payment Details'  
            body='Facilitating seamless transactions, we do require financial information, such as your credit card particulars, to successfully process payments. Rest assured, this financial data is transmitted and stored with utmost adherence to rigorous industry benchmarks for data security'
          />
        </div>


        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[40px]'>Usage of Collected Information</h5>
          
          <ListText 
            title='Service Delivery'  
            body='The array of personal and health information we gather is primarily leveraged to underpin the core facet of our endeavor: providing you with our mental health services that are custom-tailored to resonate with your unique emotional and psychological landscape'
          />

          <ListText 
            title='Communication Facilitation'  
            body='Your provided contact details serve as the conduit through which we convey crucial information, including appointment specifics, updates, and any other pertinent notifications germane to our services'
          />

          <ListText 
            title='Payment Processing'  
            body='In the context of financial information, its use is singular in nature: to facilitate the seamless processing of payments and to uphold our adherence to the legal stipulations governing financial transactions'
          />
        </div>


        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[40px]'>Data Security</h5>
          
          <ListText 
            title='Secure Storage'  
            body='It is our solemn commitment that all amassed data is ensconced within our secure servers. These servers meticulously adhere to industry standards to ensure robust data security'
          />

          <ListText 
            title='Confidentiality Veneration'  
            body='Our paramount commitment to confidentiality is mirrored in our strict control over access to your personal data. Only authorized personnel are granted access, further fortifying our resolve to uphold your privacy'
          />
        </div>


        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[40px]'>Information Sharing</h5>
          
          <ListText 
            title='Third-Party Engagement'  
            body="It's imperative to underscore that we exercise restraint in sharing your personal and health information with external parties. Such sharing is contingent solely upon operational necessities that underscore service delivery or upon legal mandates"
          />

          <ListText 
            title='Aggregated and Anonymized Usage'  
            body='We may collate anonymized and aggregated data sets for research, analysis, and strategic refinement purposes, thereby assuring your privacy remains intact'
          />
        </div>


        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[40px]'>Your Choices</h5>
          
          <ListText 
            title='Access and Correction Privileges'  
            body='You retain the privilege to access and rectify your personal information by initiating contact with us. For health information, the avenue for updating exists during your counseling sessions, ensuring a nuanced and secure approach.'
          />

          <ListText 
            title='Communication Tailoring'  
            body='We honor your preference to opt-out of non-essential communications, thus vesting you with a measure of control over your engagement with us'
          />
        </div>


        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[40px]'>Data Retention Dynamics</h5>
          
          <ListText 
            title='Duration Consideration'  
            body='In adherence to operational necessity and legal requirements, we retain your personal and health data for periods that align with our service delivery and compliance obligations.'
          />

          <ListText 
            title="Anonymized Data's Role"  
            body='We may maintain anonymized data for extended periods to facilitate research and analysis endeavors, dissociating this information from individual identities'
          />
        </div>


        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[40px]'>Compliance Commitment</h5>
          
          <ListText 
            title='Legal Landscape'  
            body='Our operational landscape complies with prevailing legal frameworks and regulatory requirements governing data protection and privacy right'
          />

          <ListText 
            title="Children's Privacy"  
            body='We underscore that our services are not intended for individuals below the age of 18 unless the embrace of these services is accompanied by explicit parental or legal guardian consent.'
          />
        </div>


        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[20px]'>Changes to Privacy Policy</h5>
          <p className='text-[#555] text-[18px] font-medium leading-[27px]'>
            We remain committed to transparency in our operations. In the event of amendments to this privacy policy, we will duly communicate these changes through our website. Your continued utilization of our services post-revision shall serve as a manifestation of your acceptance of the updated policy
          </p>
        </div>

        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[20px]'>Legal Jurisdiction and Dispute Resolution</h5>
          <p className='text-[#555] text-[18px] font-medium leading-[27px]'>
          These terms and conditions are governed by the laws of the jurisdiction in which Tranquil Life is registered. In the event of disputes arising from or related to these terms, both parties agree to adhere to arbitration proceedings in accordance with the rules set forth by the relevant arbitration authority
          </p>
        </div>

        <div className='mb-[100px]'>
          <h5 className='text-[#252525] text-[32px] font-medium leading-[40px] mb-[20px]'>Connect with us</h5>
          <p className='text-[#555] text-[18px] font-medium leading-[27px]'>
            Your engagement with Tranquil Life's mental health services signifies your cognizance and acceptance of the privacy principles articulated within this policy framework.
            <br /><br />
            For any inquiries or apprehensions regarding our privacy policy or the handling of your data, we warmly encourage you to reach out to us
            <br /><br />
          </p>
        </div>

        <Feedback />
      </div>
    </WebsiteLayout>
  )
}

export default PrivacyPolicy
