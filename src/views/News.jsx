import React from 'react'
import Header from '@components/Header'
import SignUpNews from '../components/SignUpNews'
import Footer from '@components/Footer'
import ArticleNews from '@components/ArticleNews'
import Newsbanner from '@components/Newsbanner'


const Contact = () => {
  return (
    <> 
    <Header />
    <Newsbanner />
    <ArticleNews/>
    <SignUpNews />
    <Footer />
    </>
  )
}

export default Contact