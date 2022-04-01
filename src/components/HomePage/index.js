import React from 'react'
import Hero from './Hero';
import Items from '../common/Auction/Auctions';
import TopSellers from './TopSellers';
import HotCollections from './HotCollections';
import GetStartedTab from './GetStartedTab';

const MainContent = () => {
  return (
    <main className="main">
      <Hero />
      <div className='container'>
        <Items
          fromExplore={false}
          title="Live Auctions"
          to='explore'
        />
        <TopSellers />
        <Items
          fromExplore={true}
          title="Explore"
          to='explore'
        />
        <HotCollections />
        <GetStartedTab />
      </div>
    </main>
  );
}

export default MainContent;

