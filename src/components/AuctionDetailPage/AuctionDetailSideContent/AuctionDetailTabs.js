import React from 'react';

const AuctionDetailTabs = ({tabs}) => {

    const buildTabList = () => {
      return tabs.map((tab,index) => 
        <li className='nav-item'>
          <a
            data-toggle="tab" 
            href={`#tab${index}`} 
            role="tab" 
            aria-controls={`tab${index}`}
            aria-selected="true"
            className={`nav-link ${index === 0 ? 'active' : ''}`}>
              {tab}
          </a>
        </li>
      );
    }
  
    return (
      <ul class="nav nav-tabs asset__tabs" role="tablist">
                  {
            buildTabList()
          }
      </ul>
    );
};

export default AuctionDetailTabs;