import React from 'react'
import FooterIntroSection from './FooterIntroSection';
import FooterItemListWithTitle from './FooterListItemWithTitle';
import FooterBottomSection from './FooterBottomSection';
import { 
    marketplaceItems, 
    exploreItems, 
    communityItems 
} from '../../../constants/FooterItems';

const Footer = () => {
  return (
    <footer className='footer'> 
        <div className="container">
            <div className='row'>
                <FooterIntroSection/>
                <FooterItemListWithTitle 
                    title="NFT Marketplace"
                    items={marketplaceItems}
                />
                <FooterItemListWithTitle 
                    title="Explore"
                    items={exploreItems}
                />
                <FooterItemListWithTitle 
                    title="Community"
                    items={communityItems}
                />
            </div>
            <FooterBottomSection/>
        </div>
    </footer>
  );
}
export default Footer;
