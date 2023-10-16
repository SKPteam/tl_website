import React, { useEffect, useState } from 'react';
import Preloader from '@/components/organisms/Preloader';
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Router from "next/router"


export default function App({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 6000);
  // }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)
    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])

  return (
    <AnimatePresence mode="wait" initial={false}>
      {loading ? (
        <Preloader />
      ) : (
        <Component {...pageProps} key={router.asPath} />
      )}
    </AnimatePresence>
  );
}
