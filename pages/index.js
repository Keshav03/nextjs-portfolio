import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'


import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/AboutUs'
import Skills from './components/Skills'


export default function Home() {
  return (
    <div className="h-screen bg-[#242526] relative scrollbar scrollbar-track-gray-600 scrollbar-thumb-[#36bbc4]/60">
      <Head>
        <title>Keshav Bokhoree - Junior Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Header></Header>
          <Hero></Hero>
          <About id="about"></About>
          <Skills></Skills>
          <Contact></Contact>
      </main>



    </div>
  )
}
