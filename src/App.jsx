import React from 'react'
import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx"
import Test from './components/Test'
import Hero from './components/hero/Hero.jsx'

const App = () => {
  return (
    <div>
      <section id='HomePage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Services'>Parallex</section>
      <section>Services</section>
      <section id='Portfolio'>Parallex</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
      {/* <Test/> */}
    </div>
  )
}

export default App