import React from 'react';

const Bid = ({image,price,time,username,}) => {
    return (
        <div className="asset__action asset__action--verified">
            <img src={image} alt=""/>
            <p>
                Bid placed for 
                <b>{ " " + price + "ETH "}</b> 
                {time}<br/>by 
                <a href="author.html">{" " + username}</a>
            </p>
        </div>
    );
}

export default Bid;