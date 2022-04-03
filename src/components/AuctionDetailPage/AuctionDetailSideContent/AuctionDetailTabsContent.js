import React from 'react';

import HistoryContent from './HistoryContent';
import BidsContent from './BidsContent';

const AuctionDetailTabsContent = () => {
  return (
    <div className='tab-content'>
        <HistoryContent/>
        <BidsContent/>
    </div>
  );
}

export default AuctionDetailTabsContent;