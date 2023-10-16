import Footer from '@/components/molecules/Footer'
import Navbar from '@/components/molecules/Navbar'
import React from 'react'
import { motion } from "framer-motion";

const WebsiteLayout = ({ children }) => {
  return (
    <motion.div
    initial={{ x: -300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </motion.div>
  )
}

export default WebsiteLayout