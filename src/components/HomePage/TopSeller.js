import React from 'react';
import { Link } from 'react-router-dom';

const TopSeller = (props) => {
  
  const {sellerImage, price, sellerUserName, index } = props.seller; 

  return (
    <li>
        <span className="sellers-list__number">{index}</span>
        <div className="sellers-list__author sellers-list__author--verified">
            <img src={sellerImage} alt=""/>
            <Link to="/author">{sellerUserName}</Link>
            <span>{price} ETH</span>
        </div>
    </li>
  );
}

export default TopSeller;