import React from 'react'
import Hero from './Hero';
import Auctions from './Auctions';
import TopSellers from './TopSellers';

const MainContent = () => {
  return (
    <main class="main">
      <Hero/>
      <div className='container'>
        <Auctions/>
        <TopSellers/>
      </div>
    </main>
  );
}

export default MainContent;