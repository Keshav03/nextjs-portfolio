import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import ErrorBoundary from "../components/ErrorBoundary"
import ProjectErrorBoundary from '../components/ProjectErrorBoundary'


import Header from '../components/Header'
import Modal from '../components/Modal'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import About from '../components/AboutUs'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Loading from '../components/Loading'
import { Suspense, useState, useEffect, useRef, use } from 'react'
import { motion, useScroll,useMotionValueEvent } from 'framer-motion'
import { async } from '@firebase/util'

export default function Home() {

  let [loading,setLoading] = useState(false)
  let [headerVisible,setHeaderVisible] = useState(true)

  const ref = useRef(null)
  let {scrollY} = useScroll({container:ref})

    
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest > scrollY.getPrevious()){
      setHeaderVisible(false)
    }else{
      setHeaderVisible(true)
    }
  })   
    
  // useEffect(() => {
  //   const onPageLoad = () => {
  //     setLoading(false);
  //     console.log("Loaded!")
  //   };
  //   setTimeout(onPageLoad,3500)
  //   // if (document.readyState === 'complete') {
  //   //   setTimeout(onPageLoad,3500)
  //   // } 
  //   // else {
  //   //   window.addEventListener('load', onPageLoad);
  //   //   return () => window.removeEventListener('load', onPageLoad);
  //   // }
  // })

    return (
      <div >
    {!loading ?  
      <div className="relative h-screen scroll-smooth bg-[#242526]  scrollbar scrollbar-track-gray-600 scrollbar-thumb-[#36bbc4]/60 overflow-x-hidden"
        ref={ref}
      >
      <Head>
        <title>Keshav Bokhoree - Junior Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Suspense fallback={<Header></Header>}>
        <main >
          <Header headerVisible={headerVisible}></Header>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          {/* <ProjectErrorBoundary> */}
              <Suspense fallback={<p>loading ...</p>}>
                  <Projects></Projects>
              </Suspense>
          {/* </ProjectErrorBoundary> */}
          <Contact></Contact>
          <Footer></Footer>
        </main>
      </Suspense>
    </div>
    :
      <Loading loading={setLoading}></Loading>
    }
    </div>

    )
}
