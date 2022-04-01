import React from 'react';
import Auction from '../common/Auction';

const OnSale = () => {
    return (
        <div className="tab-pane fade show active" id="tab1" role="tabpanel">
            <div className='row row--grid'>
                <div className="col-12 col-sm-6 col-lg-4">
                    <Auction />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <Auction />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <Auction />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <Auction />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <Auction />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <Auction />
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <Auction />
                </div>
            </div>
            <div className="row row--grid">
                <div className="col-12">
                    <button
                        className="main__load"
                        type="button"
                    >Load more</button>
                </div>
            </div>
        </div>
    );
};

export default OnSale;
