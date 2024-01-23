import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../containers/Banner'
import Footer from '../components/Footer'
import About from '../containers/About'
import Contact from '../containers/Contact'
import WorkDetails from '../containers/WorkDetails'


const Home = () => {
  return (
    <div style={{ minWidth: '342px' }}>
        {/* Navbar */}
        <Navbar />
       
        {/* Sections */}
        <Banner />
        <About />
        
        <WorkDetails />
        <Contact />
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Home