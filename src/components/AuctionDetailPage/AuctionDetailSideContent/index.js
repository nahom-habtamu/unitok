import React, { useState } from 'react';

import AuctionDetailDescription from './AuctionDetailDescription';
import AuthorAsset from './AuthorAsset';
import AuctionDetailTabs from './AuctionDetailTabs';
import AuctionDetailTabsContent from './AuctionDetailTabsContent';
import AssetBottomContent from './AssetBottomContent';
import BidModal from './BidModal';

const AuctionDetailSideContent = () => {

  const [bid, setBid] = useState("");

  return (
    <div className='col-12 col-xl-4'>
        <div className='asset__info'>
            <AuctionDetailDescription/>
            <AuthorAsset/>
            <AuctionDetailTabs tabs={["History","Bids"]}/>
            <AuctionDetailTabsContent/>
            <AssetBottomContent/>
            <BidModal 
              onBidChanged={(value) => setBid(value)}
              onBidSubmitted={() => console.log(bid)}
            />
        </div>
    </div>
  );
}


export default AuctionDetailSideContent;

