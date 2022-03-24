import React from 'react';
import { Link } from 'react-router-dom';

const AuctionsTitle = () => {
  return (
    <div className="col-12">
        <div className="main__title">
            <h2>
                <Link to="/explore">Live Auctions</Link>
            </h2>
        </div>
    </div>
  )
}

export default AuctionsTitle