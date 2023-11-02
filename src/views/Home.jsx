import React from 'react'
import Header from '@components/Header'
import OurServices from '@components/OurServices'
import Footer from '@components/Footer'
import Showcase from '@components/Showcase'
import Features from '@components/Features'
import Brands from '@components/Brands'
import AboutCompany from '@components/AboutCompany'
import WhyUs from '@components/WhyUs'




const Home = () => {
  return (
    <>
    <Header />
    <Showcase />
    <Brands />
    <Features />
    <AboutCompany />
    <OurServices />
    <WhyUs />
    <Footer />
    </>
  )
}

export default Home