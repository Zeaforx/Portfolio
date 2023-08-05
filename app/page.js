import Image from 'next/image'
// import "./globals.css"
import Title from './title'
import About from './about'
import Services from './services'
import Quote from './quote'
import Contact from './contact'
import Footer from './footer'


export default function Home() {
  return (
    <main >
      <Title/>
      <About/>
      <Services/>
      <Quote/>
      <Contact/>
      <Footer/>
      
      <p>weather</p>
    </main>
  )
}
