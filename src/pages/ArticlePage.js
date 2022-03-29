import React from 'react';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import MainContent from '../components/ArticlePage';

const ArticlePage = () => {
  return (
    <>
        <NavBar/>
        <MainContent/>
        <Footer/>
    </>
  );
}

export default ArticlePage;