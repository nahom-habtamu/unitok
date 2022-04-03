import React from 'react';

import Bid from './Bid';

const HistoryContent = () => {
    return (
        <div className="tab-pane fade show active" id="tab0" role="tabpanel">
            <div className="asset__actions asset__actions--scroll" id="asset__actions--scroll">
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

export default HistoryContent;