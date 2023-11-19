import React from 'react'
import Header from '@components/Header'
import SignUpNews from '../components/SignUpNews'
import Footer from '@components/Footer'
import ArticleNews from '@components/ArticleNews'
import DetailedArticleNews from '@components/DetailedArticleNews' // Change this line
import Newsbanner from '@components/Newsbanner'

const DetailedArticleNewsPage = () => {
  return (
    <> 
      <Header />
      <Newsbanner />
      <DetailedArticleNews />
      <SignUpNews />
      <Footer />
    </>
  )
}

export default DetailedArticleNewsPage;
