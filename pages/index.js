import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'


import Header from './components/Header'
import Modal from './components/Modal'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Skills from './components/Skills'
import About from './components/AboutUs'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {

  return (
    <div className="relative h-screen scroll-smooth bg-[#242526]  scrollbar scrollbar-track-gray-600 scrollbar-thumb-[#36bbc4]/60">
      <Head>
        <title>Keshav Bokhoree - Junior Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Modal id="modal"></Modal>
          <Header></Header>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
      </main>



    </div>
  )
}
