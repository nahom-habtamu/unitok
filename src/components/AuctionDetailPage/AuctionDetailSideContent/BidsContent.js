import React from "react";

import Bid from './Bid';

const BidsContent = () => {
    return (
        <div className="tab-pane fade" id="tab1" role="tabpanel">
            <div className="asset__actions">
                <Bid
                    image={"img/avatars/avatar10.jpg"}
                    price="10"
                    time={"20 minutes ago"}
                    username="nahom"
                />
                <Bid
                    image={"img/avatars/avatar10.jpg"}
                    price="10"
                    time={"20 minutes ago"}
                    username="nahom"
                />
                <Bid
                    image={"img/avatars/avatar10.jpg"}
                    price="10"
                    time={"20 minutes ago"}
                    username="nahom"
                />
            </div>
        </div>
    );
}

export default BidsContent;