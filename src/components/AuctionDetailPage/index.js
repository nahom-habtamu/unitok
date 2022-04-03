import React from 'react';


import AuctionDetailTitle from './AuctionDetailTitle';
import BreadCrumb from '../common/BreadCrumb';
import AuctionShare from './AuctionShare';
import AuctionDetailSideContent from './AuctionDetailSideContent';
import OtherAuthorAssets from './OtherAuthorAssets';

const MainContent = () => {
  return (
    <main className='main'>
        <div className='container'>
            <div className='row row--grid'>
                <BreadCrumb
                    active="Home"
                    link="/"
                    nonActive="Item"
                />
                <AuctionDetailTitle 
                    title={"Exclusive digital asset"}
                />
            </div>
            <div className='row'>
                <AuctionShare 
                    facebookLink="somelink"
                    id="id"
                    image="img/cover/cover-big.jpg"
                    likesCount={320}
                    twitterLink="somelink"
                />
                <AuctionDetailSideContent/>
            </div>
            <OtherAuthorAssets/>
        </div>
    </main>
  );
}






export default MainContent;