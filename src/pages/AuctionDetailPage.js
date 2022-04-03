import React from 'react';
import MainContent from '../components/AuctionDetailPage';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';

const AuctionDetailPage = () => {
  return (
    <>
        <NavBar/>
        <MainContent/>
        <Footer/>
    </>
  );
}

export default AuctionDetailPage;