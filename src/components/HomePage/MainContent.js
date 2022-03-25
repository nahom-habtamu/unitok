import React from 'react'
import Hero from './Hero';
import Items from '../common/item/Items';
import TopSellers from './TopSellers';

const MainContent = () => {
  return (
    <main className="main">
      <Hero/>
      <div className='container'>
        <Items 
          fromExplore={false} 
          title="Live Auctions" 
          to='explore'
        />
        <TopSellers/>
        <Items 
          fromExplore={true} 
          title="Explore" 
          to='explore'
        />
      </div>
    </main>
  );
}

export default MainContent;