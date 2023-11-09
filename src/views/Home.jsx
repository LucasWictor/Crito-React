import React from 'react'
import Header from '@components/Header'
import OurServices from '@components/OurServices'
import Footer from '@components/Footer'
import Showcase from '@components/Showcase'
import Features from '@components/Features'
import Brands from '@components/Brands'
import AboutCompany from '@components/AboutCompany'
import WhyUs from '@components/WhyUs'
import ProjectCases from '@components/ProjectCases'
import MeetOurTeam from '@components/MeetOurTeam'
import Testimonial from '@components/Testimonial'
import ArticlesSection from '@components/ArticlesSection'





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
    <ProjectCases/>
    <MeetOurTeam/>
    <Testimonial/>
    <ArticlesSection/>
    <Footer/>
    </>
  )
}

export default Home