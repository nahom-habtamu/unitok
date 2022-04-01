import React from 'react';
import Auction from '../common/Auction';
import Paginator from '../common/Paginator';

const Created = () => {
    return (
        <div className="tab-pane fade" id="tab2" role="tabpanel">
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
            </div>
            <Paginator 
                totalElements={100} 
                initialActivePage={1} 
                pageSize={10} />
        </div>
    );
};

export default Created;