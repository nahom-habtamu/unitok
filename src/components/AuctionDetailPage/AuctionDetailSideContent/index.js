import React, { useState } from 'react';

import AuctionDetailDescription from './AuctionDetailDescription';
import AuthorAsset from './AuthorAsset';
import AuctionDetailTabs from './AuctionDetailTabs';
import AuctionDetailTabsContent from './AuctionDetailTabsContent';
import AssetBottomContent from './AssetBottomContent';
import BidModal from './BidModal';
import Portal from '../../common/Portal';

const AuctionDetailSideContent = () => {

  const [bid, setBid] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='col-12 col-xl-4'>
      <div className='asset__info'>
        <AuctionDetailDescription />
        <AuthorAsset />
        <AuctionDetailTabs tabs={["History", "Bids"]} />
        <AuctionDetailTabsContent />
        <AssetBottomContent
          onShowModalClicked={() => setShowModal(true)}
        />
        {
          showModal &&

          <Portal>
            <BidModal
              onCloseModal={() => setShowModal(false)}
              bid = {bid}
              onBidChanged={(value) => setBid(value)}
              onBidSubmitted={() => {
                console.log(bid);
                setShowModal(false);
              }}
              isActive={showModal}
            />
          </Portal>

        }
      </div>
    </div>
  );
}


export default AuctionDetailSideContent;

