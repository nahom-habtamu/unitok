import React from 'react'
import TopSeller from './TopSeller';
import TopSellersSectionHeader from './TopSellersSectionHeader';

const TopSellers = () => {

  let sellers = [
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 500,
        sellerUserName : "@nahom"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 700,
        sellerUserName : "@abebe"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 600,
        sellerUserName : "@kebede"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 600,
        sellerUserName : "@kebede"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 600,
        sellerUserName : "@kebede"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 600,
        sellerUserName : "@kebede"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 600,
        sellerUserName : "@kebede"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 600,
        sellerUserName : "@kebede"
    },
    {
        sellerImage : "img/avatars/avatar.jpg",
        price : 600,
        sellerUserName : "@kebede"
    },
    
  ];

  const buildTopSellers = () => {
    return sellers.map((e, index) => {
        return <TopSeller key={index} seller={{ ...e, index: index + 1 }} />;
    });
  }

  return (
    <section className='row row--grid'>
        <TopSellersSectionHeader/>
        <div className='col-12'>
            <ul className='sellers-list'>
                {
                    buildTopSellers()
                }
            </ul>
        </div>
    </section>  
  )  
}

export default TopSellers;