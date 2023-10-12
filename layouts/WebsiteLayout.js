import Footer from '@/components/molecules/Footer'
import Navbar from '@/components/molecules/Navbar'
import React from 'react'

const WebsiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default WebsiteLayout